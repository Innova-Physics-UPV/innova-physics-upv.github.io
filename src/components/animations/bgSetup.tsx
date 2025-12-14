import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { NeonCurvesGenerator, CurveObject } from '@/components/animations/curves';
import { ParticleSystem } from '@/components/animations/ParticleSistem';

const NeonDrawingEffect = ({ activePage }: { activePage: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // ---- Scene, camera y renderer ----
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#111207');

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    // ---- Curvas ----
    const curvesGenerator = new NeonCurvesGenerator();
    const curves = curvesGenerator.generateCurves();
    curves.forEach((curve: CurveObject) => scene.add(curve.mesh));

    // ---- Sistema de partículas ----
    const particleSystem = new ParticleSystem(scene, 25);
    particleSystem.spawnInitialParticles(25, new THREE.Vector3(0, 0, 0));
    particleSystemRef.current = particleSystem;

    // ---- Listener para evento "Aceleron" ----
    const handleAceleron = (e:CustomEvent) => {
      console.log('Aceleron event triggered');
      particleSystem.spawnInitialParticles(25, new THREE.Vector3(0, 0, 0),true,e.detail.cooldown);
    };
    window.addEventListener('Aceleron', handleAceleron as EventListener);

    // ---- Post-procesado ----
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 1.6;
    bloomPass.radius = 0;
    composer.addPass(bloomPass);

    // ---- Resize ----
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // ---- Click para crear partículas (solo en '/particulas') ----
    let onClick: ((e: MouseEvent) => void) | null = null;
    if (activePage === '/particulas') {
      const mouse = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();
      onClick = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const position = new THREE.Vector3();
        raycaster.ray.at(5, position);
        particleSystem.createParticle(position, undefined, true);
      };
      window.addEventListener('click', onClick);
    }

    // ---- Animación ----
    let startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const globalProgress = Math.min(elapsed / 8000, 1.1) * 5;

      curves.forEach((curve, i) => {
        curve.material.uniforms.progress.value = Math.max(
          Math.min(globalProgress - i * 0.03, 1.1),
          0
        );
        curve.material.uniforms.time.value = elapsed * 0.001;
      });

      particleSystem.update(0.016);
      composer.render();
      requestAnimationFrame(animate);
    };
    animate();

    // ---- Cleanup----
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('Aceleron', handleAceleron as EventListener);
      if (onClick) window.removeEventListener('click', onClick);

      renderer.dispose();
      composer.dispose();
      curves.forEach(curve => {
        curve.mesh.geometry.dispose();
        curve.material.dispose();
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activePage]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -10,
      }}
    />
  );
};

export default NeonDrawingEffect;
