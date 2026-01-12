'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function LaptopModel() {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
    if (screenRef.current) {
      // Subtle screen glow animation
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base */}
      <mesh position={[0, -0.5, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.5, 0.2, 1.8]} />
        <meshStandardMaterial
          color="#0F172A"
          metalness={0.8}
          roughness={0.3}
          emissive="#2563EB"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Screen */}
      <mesh
        ref={screenRef}
        position={[0, 0.3, -0.9]}
        rotation={[-0.3, 0, 0]}
      >
        <boxGeometry args={[2.5, 1.8, 0.1]} />
        <meshStandardMaterial
          color="#0F172A"
          metalness={0.9}
          roughness={0.2}
          emissive="#2563EB"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Screen Display */}
      <mesh
        position={[0, 0.3, -0.85]}
        rotation={[-0.3, 0, 0]}
      >
        <boxGeometry args={[2.2, 1.5, 0.05]} />
        <meshStandardMaterial
          color="#2563EB"
          emissive="#2563EB"
          emissiveIntensity={0.8}
        />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -0.4, 0.2]}>
        <boxGeometry args={[2.2, 0.05, 1.4]} />
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.7}
          roughness={0.4}
        />
      </mesh>
    </group>
  );
}

export default function Laptop() {
  return (
    <div className="w-full h-full">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#2563EB" />
        <spotLight position={[0, 5, 0]} intensity={0.8} color="#2563EB" angle={0.3} />
        <LaptopModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
