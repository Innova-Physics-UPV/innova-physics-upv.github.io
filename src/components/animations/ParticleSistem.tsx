import * as THREE from 'three';

interface Particle {
    position: THREE.Vector3;
    velocity: THREE.Vector3;
    color: THREE.Color;
    size: number;
    lifetime: number;
    mesh: THREE.Mesh;
    trail: TrailParticle[];  // Array para almacenar las partículas del rastro
}

interface Flash {
    mesh: THREE.Mesh;
    lifetime: number;
    initialScale: number;
}

interface TrailParticle {
    mesh: THREE.Mesh;
    lifetime: number;
    maxLifetime: number;
}

export class ParticleSystem {
    private particles: Particle[] = [];
    private flashes: Flash[] = [];
    private scene: THREE.Scene;
    private maxParticles: number;
    private lived = 0;

    constructor(scene: THREE.Scene, maxParticles: number) {
        this.scene = scene;
        this.maxParticles = maxParticles;
    }

    private createFlash(position: THREE.Vector3, color: THREE.Color) {
        const flashGeometry = new THREE.PlaneGeometry(0.1, 0.1);
        const flashMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });

        const flashMesh = new THREE.Mesh(flashGeometry, flashMaterial);
        flashMesh.position.copy(position);
        flashMesh.lookAt(this.scene.position);
        
        const flash: Flash = {
            mesh: flashMesh,
            lifetime: 0.2,
            initialScale: 1
        };

        this.scene.add(flashMesh);
        this.flashes.push(flash);
    }

    private createTrailParticle(position: THREE.Vector3, color: THREE.Color): TrailParticle {
        const geometry = new THREE.SphereGeometry(0.02, 4, 4); // Más pequeña que la partícula principal
        const material = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(position);

        const trailParticle: TrailParticle = {
            mesh,
            lifetime: 0.5, // Duración del rastro
            maxLifetime: 0.5
        };

        this.scene.add(mesh);
        return trailParticle;
    }

    createParticle(origin?: THREE.Vector3, color?: THREE.Color,urgent?:boolean): Particle|null {
        urgent = urgent ?? false;

        if (this.particles.length >= this.maxParticles && (!urgent ||  this.particles.length >= 2*this.maxParticles )) return null;

        const boundarySize = 15;
        const spawnOrigin = origin || new THREE.Vector3(
            (Math.random() - 0.5) * boundarySize,
            (Math.random() - 0.5) * boundarySize,
            (Math.random() - 0.5) * 5
        );
        

        const particleColor = color || new THREE.Color(Math.random(), Math.random(), Math.random());
        this.createFlash(spawnOrigin, particleColor);

        const geometry = new THREE.SphereGeometry(0.05, 4, 4);
        const material = new THREE.MeshBasicMaterial({
            color: particleColor,
            transparent: true,
            opacity: 0.7
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(spawnOrigin);
        var lifetime= 4 + Math.random() * 15;
        if(urgent){
            lifetime = 0.5 + Math.random() * 10; }

        const particle: Particle = {
            mesh,
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.35,
                (Math.random() - 0.5) * 0.35,
                (Math.random() - 0.5) * 0.35
            ),
            lifetime: lifetime,
            position: spawnOrigin.clone(),
            color: particleColor,
            size: 0.05,
            trail: [] 
        };

        this.scene.add(mesh);
        this.particles.push(particle);
        //console.log("Particle created",this.particles.length);
        return particle;
    }

    update(deltaTime: number) {
        try {
            this.lived += deltaTime;
    
            // Actualizar destellos
            for (let i = this.flashes.length - 1; i >= 0; i--) {
                try {
                    if (i >= this.flashes.length || i < 0) continue;
                    const flash = this.flashes[i];
                    if (!flash) continue;
    
                    flash.lifetime -= deltaTime;
    
                    const lifeRatio = flash.lifetime / 0.4;
                    const scale = flash.initialScale * (1 + (1 - lifeRatio) * 2);
                    flash.mesh.scale.set(scale, scale, scale);
                    (flash.mesh.material as THREE.MeshBasicMaterial).opacity = lifeRatio;
    
                    if (flash.lifetime <= 0) {
                        this.scene.remove(flash.mesh);
                        this.flashes.splice(i, 1);
                    }
                } catch (error) {
                    console.warn("Error al actualizar destello:", error);
                    try {
                        if (i >= 0 && i < this.flashes.length) {
                            this.flashes.splice(i, 1);
                        }
                    } catch (e) { /* ignorar errores durante la limpieza */ }
                }
            }
    
            // Actualizar partículas y sus rastros
            for (let i = this.particles.length - 1; i >= 0; i--) {
                try {
                    if (i >= this.particles.length || i < 0) continue;
                    const particle = this.particles[i];
                    if (!particle) continue;
                    
                    // Crear nueva partícula de rastro en la posición actual
                    try {
                        if (Math.random() < 0.3) { // Controla la densidad del rastro
                            const trail = this.createTrailParticle(particle.mesh.position.clone(), particle.color);
                            particle.trail.push(trail);
                        }
                    } catch (trailError) {
                        console.warn("Error al crear rastro:", trailError);
                    }
    
                    // Actualizar rastros existentes
                    for (let j = particle.trail.length - 1; j >= 0; j--) {
                        try {
                            if (j >= particle.trail.length || j < 0) continue;
                            const trail = particle.trail[j];
                            if (!trail) continue;
    
                            trail.lifetime -= deltaTime;
                            
                            // Desvanecer el rastro
                            const lifeRatio = trail.lifetime / trail.maxLifetime;
                            (trail.mesh.material as THREE.MeshBasicMaterial).opacity = lifeRatio * 0.5;
                            
                            if (trail.lifetime <= 0) {
                                this.scene.remove(trail.mesh);
                                particle.trail.splice(j, 1);
                            }
                        } catch (trailUpdateError) {
                            console.warn("Error al actualizar rastro:", trailUpdateError);
                            try {
                                if (j >= 0 && j < particle.trail.length) {
                                    particle.trail.splice(j, 1);
                                }
                            } catch (e) { /* ignorar errores durante la limpieza */ }
                        }
                    }
    
                    // Actualizar posición de la partícula
                    try {
                        particle.mesh.position.add(particle.velocity);
                        particle.lifetime -= deltaTime;
                    } catch (positionError) {
                        console.warn("Error al actualizar posición:", positionError);
                    }
    
                    // Colisiones y resto de la lógica
                    let particleRemoved = false;
                    try {
                        for (let j = this.particles.length - 1; j >= 0 && !particleRemoved; j--) {
                            try {
                                if (j >= this.particles.length || j < 0 || i >= this.particles.length || i < 0) continue;
                                if (i === j) continue;
                                
                                const aux = this.particles[j];
                                if (!aux) continue;
    
                                const dx = particle.mesh.position.x - aux.mesh.position.x;
                                const dy = particle.mesh.position.y - aux.mesh.position.y;
                                const distance = Math.sqrt(dx * dx + dy * dy);
    
                                if (distance < 0.1 && this.lived > 3) {
                                    const v2 = aux.mesh.position.clone();
                                    
                                    // Limpiar rastros antes de eliminar la partícula
                                    try {
                                        particle.trail.forEach(trail => {
                                            this.scene.remove(trail.mesh);
                                        });
                                    } catch (e) { console.warn("Error al limpiar rastros 1:", e); }
                                    
                                    try {
                                        aux.trail.forEach(trail => {
                                            this.scene.remove(trail.mesh);
                                        });
                                    } catch (e) { console.warn("Error al limpiar rastros 2:", e); }
                                    
                                    try {
                                        this.scene.remove(particle.mesh);
                                        if (i >= 0 && i < this.particles.length) {
                                            this.particles.splice(i, 1);
                                        }
                                    } catch (e) { console.warn("Error al eliminar partícula 1:", e); }
                                    
                                    try {
                                        this.scene.remove(aux.mesh);
                                        if (j >= 0 && j < this.particles.length) {
                                            // Ajustar j si i < j, porque el splice anterior habría cambiado los índices
                                            const adjustedJ = i < j ? j - 1 : j;
                                            if (adjustedJ >= 0 && adjustedJ < this.particles.length) {
                                                this.particles.splice(adjustedJ, 1);
                                            }
                                        }
                                    } catch (e) { console.warn("Error al eliminar partícula 2:", e); }
                                    
                                    try {
                                        this.spawnInitialParticles(5, v2);
                                    } catch (e) { console.warn("Error al crear nuevas partículas:", e); }
                                    
                                    particleRemoved = true;
                                    break;
                                }
                            } catch (collisionItemError) {
                                console.warn("Error al procesar colisión con partícula:", collisionItemError);
                            }
                        }
                    } catch (collisionError) {
                        console.warn("Error en proceso de colisiones:", collisionError);
                    }
    
                    if (particleRemoved) continue;
    
                    // Crear partícula aleatoria
                    try {
                        const randomnumber = Math.random();
                        if (randomnumber < 0.37 && this.particles.length < this.maxParticles) {
                            this.createParticle();
                        }
                    } catch (randomCreateError) {
                        console.warn("Error al crear partícula aleatoria:", randomCreateError);
                    }
    
                    // Verificar tiempo de vida
                    try {
                        if (particle.lifetime <= 0) {
                            // Limpiar rastros antes de eliminar la partícula
                            try {
                                particle.trail.forEach(trail => {
                                    this.scene.remove(trail.mesh);
                                });
                            } catch (e) { console.warn("Error al limpiar rastros:", e); }
                            
                            this.scene.remove(particle.mesh);
                            this.particles.splice(i, 1);
                        }
                    } catch (lifetimeError) {
                        console.warn("Error al verificar tiempo de vida:", lifetimeError);
                        try {
                            if (i >= 0 && i < this.particles.length) {
                                this.particles.splice(i, 1);
                            }
                        } catch (e) { /* ignorar errores durante la limpieza */ }
                    }
                } catch (particleError) {
                    console.warn("Error general al actualizar partícula:", particleError);
                    try {
                        if (i >= 0 && i < this.particles.length) {
                            this.particles.splice(i, 1);
                        }
                    } catch (e) { /* ignorar errores durante la limpieza */ }
                }
            }
        } catch (generalError) {
            console.error("Error crítico en el sistema de partículas:", generalError);
        }
    }

    private lastSpawnTime: number = 0;

    spawnInitialParticles(count: number, v: THREE.Vector3, urgent?: boolean,cooldown:number=0) {
        const now = Date.now();
        if (now - this.lastSpawnTime < cooldown) return;
    
        this.lastSpawnTime = now;
        for (let i = 0; i < count; i++) {
            this.createParticle(v, undefined, urgent);
        }
    }
    
}