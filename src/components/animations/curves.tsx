import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';

export interface CurveObject {
    mesh: THREE.Mesh;
    material: THREE.ShaderMaterial;
}

export interface ContourPosition {
    x: number;
    y: number;
}

export class NeonCurvesGenerator {
    private colors: THREE.Color[];

    constructor(colors?: THREE.Color[]) {
        this.colors = colors || [
            
            new THREE.Color(0x005FFF), // Electric Blue
            new THREE.Color(0x800080), // Purple
            new THREE.Color(0xFF4040)  // Vibrant Red


//Colores de marca, se aumenta un 20% saturación y 10% luminosidad
            //new THREE.Color(0x512548), 
            //new THREE.Color(0x2B3177), 
            //new THREE.Color(0x761818) 
        ];
    }

    calculateContourPositions(aspectRatio?: number, numClusters = 3): ContourPosition[] {
        const ratio = aspectRatio || window.innerWidth / window.innerHeight;
        const noise2D = createNoise2D();
        const positions: ContourPosition[] = [];

        for (let i = 0; i < numClusters; i++) {
            const angle = (i / numClusters) * Math.PI * 2;
            const radius = 9;

            const baseX = Math.cos(angle) * radius;
            const baseY = Math.sin(angle) * radius * (1 / ratio);

            const noiseOffset = 2;
            const x = baseX + noise2D(baseX * 0.1, baseY * 0.1) * noiseOffset;
            const y = baseY + noise2D(baseX * 0.1 + 100, baseY * 0.1 + 100) * noiseOffset;

            positions.push({ x, y });
        }

        return positions;
    }

    createContourCurve(x0: number, y0: number, index: number, color: THREE.Color, radius: number): CurveObject {
        const points = [];
        const segments = 70;
        const noise2D = createNoise2D();

        const createOrganicShape = (t: number, baseRadius: number) => {
            const angle = t * Math.PI * 2;

            const noiseScale1 = 0.5;
            const noiseScale2 = 2.0;
            const noiseScale3 = 4.0;

            const noise1 = noise2D(Math.cos(angle) * noiseScale1, Math.sin(angle) * noiseScale1);
            const noise2 = noise2D(Math.cos(angle) * noiseScale2, Math.sin(angle) * noiseScale2) * 0.5;
            const noise3 = noise2D(Math.cos(angle) * noiseScale3, Math.sin(angle) * noiseScale3) * 0.25;

            const combinedNoise = (noise1 + noise2 + noise3) / 1.75;

            const contourFactor = Math.sin(angle * 3 + index * 0.5) * 0.3;
            const radiusMod = baseRadius * (1 + combinedNoise * 0.5 + contourFactor);

            return {
                x: radiusMod * Math.cos(angle),
                y: radiusMod * Math.sin(angle),
                z: combinedNoise * 0.2
            };
        };

        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const { x, y, z } = createOrganicShape(t, radius);
            points.push(new THREE.Vector3(x - x0, y - y0, z));
        }

        const curve = new THREE.CatmullRomCurve3(points, true);
        const geometry = new THREE.TubeGeometry(curve, 200, 0.03 + Math.random() * 0.02, 8, true);

        const shaderMaterial = this.createShaderMaterial(color);
        const mesh = new THREE.Mesh(geometry, shaderMaterial);

        return { mesh, material: shaderMaterial };
    }

    private createShaderMaterial(color: THREE.Color): THREE.ShaderMaterial {
        return new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                progress: { value: 0 },
                colorA: { value: color },
                glowIntensity: { value: 0.3 + Math.random() * 0.4 }
            },
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vPosition;
                varying vec3 vNormal;

                void main() {
                    vUv = uv;
                    vPosition = position;
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform float progress;
                uniform vec3 colorA;
                uniform float glowIntensity;

                varying vec2 vUv;
                varying vec3 vNormal;

                void main() {
                    float modifiedProgress = progress * 1.1;
                    float drawingProgress = smoothstep(0.0, 1.0, (modifiedProgress - vUv.x));
                    float closePoint = smoothstep(0.9, 1.0, modifiedProgress) * smoothstep(0.0, 0.1, vUv.x);

                    drawingProgress = max(drawingProgress, closePoint);
                    if (drawingProgress <= 0.0) discard;

                    float pulseRate = 1.5;
                    float glowPulse = sin(time * pulseRate) * 0.15 + 0.85;
                    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);

                    vec3 color = colorA;
                    float brightness = 1.0 - abs(vUv.y - 0.5) * 2.0;
                    brightness = pow(brightness, 2.0);

                    color *= glowPulse * glowIntensity;
                    color += color * fresnel * 2.5;
                    color += brightness * color * 1.5;

                    float alpha = (0.7 + brightness * 0.3) * max(drawingProgress, closePoint);
                    alpha *= (0.85 + fresnel * 0.15);

                    gl_FragColor = vec4(color, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide
        });
    }

    generateCurves(numCurves: number = 5, baseRadius: number = 6): CurveObject[] {
        const positions = this.calculateContourPositions();
        const curves: CurveObject[] = [];

        positions.forEach((pos, clusterIndex) => {
            for (let i = 0; i < numCurves; i++) {
                const radius = baseRadius + (i * 0.3);
                const curve = this.createContourCurve(pos.x, pos.y, i, this.colors[clusterIndex % this.colors.length], radius);
                curves.push(curve);
            }
        });

        return curves;
    }
}