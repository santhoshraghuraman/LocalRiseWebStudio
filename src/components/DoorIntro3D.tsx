import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import logoImg from '../assets/images/logo_exact_1790997273823.jpeg';

export const DoorIntro3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check reduced motion and session storage
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');

    if (prefersReducedMotion || hasSeenIntro) {
      setIsFinished(true);
      return;
    }

    if (!mountRef.current) return;

    // Set flag
    sessionStorage.setItem('hasSeenIntro', 'true');

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#080f24'); // Deep navy ambient
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // Renderer setup
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      mountRef.current.appendChild(renderer.domElement);
    } catch (e) {
      // Fallback if WebGL fails
      console.warn("WebGL not supported, skipping intro.");
      setIsFinished(true);
      return;
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const goldLight = new THREE.DirectionalLight(0xffd700, 1.5);
    goldLight.position.set(0, 5, 5);
    goldLight.castShadow = true;
    scene.add(goldLight);

    const fillLight = new THREE.PointLight(0x4a8eff, 1.2, 20);
    fillLight.position.set(0, -2, 4);
    scene.add(fillLight);

    // Calculate dimensions at z=0 to cover the screen
    const dist = camera.position.z;
    const vFov = (camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(vFov / 2) * dist;
    const width = height * camera.aspect;

    // Materials
    const doorMaterial = new THREE.MeshStandardMaterial({
      color: 0x0D1B3D,
      roughness: 0.6,
      metalness: 0.2,
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xF4B400,
      roughness: 0.2,
      metalness: 0.8,
    });

    // Create Doors (Groups to act as hinges)
    const doorWidth = width / 2;
    const doorHeight = height;
    const doorDepth = 0.5;

    // Left Door Hinge (Group)
    const leftDoorGroup = new THREE.Group();
    leftDoorGroup.position.set(-width / 2, 0, 0);
    scene.add(leftDoorGroup);

    // Left Door Mesh
    const leftDoorMesh = new THREE.Mesh(new THREE.BoxGeometry(doorWidth, doorHeight, doorDepth), doorMaterial);
    leftDoorMesh.position.set(doorWidth / 2, 0, 0); // Offset to pivot at the left edge
    leftDoorMesh.castShadow = true;
    leftDoorMesh.receiveShadow = true;
    leftDoorGroup.add(leftDoorMesh);

    // Left Door Gold Trim
    const trimWidth = doorWidth - 0.4;
    const trimHeight = doorHeight - 0.4;
    const leftTrim = new THREE.Mesh(new THREE.BoxGeometry(trimWidth, trimHeight, doorDepth + 0.05), goldMaterial);
    leftTrim.position.set(doorWidth / 2, 0, 0);
    leftDoorGroup.add(leftTrim);
    
    // Left Door Inner Panel (for the trim effect)
    const innerPanelL = new THREE.Mesh(new THREE.BoxGeometry(trimWidth - 0.1, trimHeight - 0.1, doorDepth + 0.1), doorMaterial);
    innerPanelL.position.set(doorWidth / 2, 0, 0);
    leftDoorGroup.add(innerPanelL);

    // Right Door Hinge (Group)
    const rightDoorGroup = new THREE.Group();
    rightDoorGroup.position.set(width / 2, 0, 0);
    scene.add(rightDoorGroup);

    // Right Door Mesh
    const rightDoorMesh = new THREE.Mesh(new THREE.BoxGeometry(doorWidth, doorHeight, doorDepth), doorMaterial);
    rightDoorMesh.position.set(-doorWidth / 2, 0, 0); // Offset to pivot at the right edge
    rightDoorMesh.castShadow = true;
    rightDoorMesh.receiveShadow = true;
    rightDoorGroup.add(rightDoorMesh);

    // Right Door Gold Trim
    const rightTrim = new THREE.Mesh(new THREE.BoxGeometry(trimWidth, trimHeight, doorDepth + 0.05), goldMaterial);
    rightTrim.position.set(-doorWidth / 2, 0, 0);
    rightDoorGroup.add(rightTrim);

    // Right Door Inner Panel
    const innerPanelR = new THREE.Mesh(new THREE.BoxGeometry(trimWidth - 0.1, trimHeight - 0.1, doorDepth + 0.1), doorMaterial);
    innerPanelR.position.set(-doorWidth / 2, 0, 0);
    rightDoorGroup.add(innerPanelR);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Render loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // GSAP Timeline Cinematic Animation
    const tl = gsap.timeline({
      onComplete: () => {
        setIsFinished(true);
      }
    });

    // 1. Initial pause & Logo glow fade
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
    })
    .to(logoRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 0.6,
      ease: 'power2.in',
    }, "+=0.8")
    // 2. Open Doors smoothly
    .to(leftDoorGroup.rotation, {
      y: Math.PI / 1.5,
      duration: 2.2,
      ease: 'power3.inOut',
    }, "-=0.2")
    .to(rightDoorGroup.rotation, {
      y: -Math.PI / 1.5,
      duration: 2.2,
      ease: 'power3.inOut',
    }, "<")
    // 3. Move camera slightly through the doors
    .to(camera.position, {
      z: 5,
      duration: 2.2,
      ease: 'power3.inOut',
    }, "<")
    // 4. Fade entire intro container overlay
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    }, "-=0.8");

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      tl.kill();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  if (isFinished) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0D1B3D] overflow-hidden"
    >
      {/* Three.js WebGL Container */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* HTML Logo Layer superimposed on doors */}
      <div 
        ref={logoRef}
        className="relative z-10 opacity-0 scale-95 flex flex-col items-center pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      >
        <div className="bg-white p-4 rounded-3xl mix-blend-multiply">
            <img 
              src={logoImg} 
              alt="Local Rise Web Studio" 
              className="w-48 sm:w-64 h-auto drop-shadow-[0_0_15px_rgba(244,180,0,0.4)]"
            />
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={() => setIsFinished(true)}
        className="absolute bottom-8 right-8 z-20 px-4 py-2 text-xs font-semibold tracking-widest text-[#F4B400] uppercase border border-[#F4B400]/30 rounded hover:bg-[#F4B400]/10 transition-colors focus:outline-none"
      >
        Skip Intro
      </button>
    </div>
  );
};
