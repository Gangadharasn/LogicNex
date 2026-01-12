'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingWireframeCube() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Wireframe Cube */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="#2563EB" wireframe />
      </mesh>
      
      {/* Corner vertices */}
      {[-1, 1].map(x => 
        [-1, 1].map(y =>
          [-1, 1].map(z => (
            <mesh key={`${x}-${y}-${z}`} position={[x, y, z]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial color="#E5E7EB" emissive="#2563EB" emissiveIntensity={1} />
            </mesh>
          ))
        )
      )}
    </group>
  );
}

function FloatingDisc({ position, delay }: { position: [number, number, number]; delay: number }) {
  const discRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (discRef.current) {
      discRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3;
      discRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.2;
    }
  });

  return (
    <group ref={discRef} position={position}>
      <mesh rotation={[Math.PI / 6, 0, Math.PI / 4]}>
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.8}
          roughness={0.2}
          emissive="#2563EB"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

export default function SimpleWireframe() {
  return (
    <div className="w-full h-full" style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      <Canvas 
        gl={{ antialias: true, alpha: true }} 
        style={{ width: '100%', height: '100%', display: 'block' }}
        camera={{ position: [0, 0, 6], fov: 50 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#E5E7EB" />
        <pointLight position={[0, 3, 3]} intensity={0.8} color="#2563EB" />
        
        <RotatingWireframeCube />
        
        <FloatingDisc position={[-1.5, 2.5, -0.5]} delay={0} />
        <FloatingDisc position={[1.5, 3, -1]} delay={1} />
        <FloatingDisc position={[0.5, 2.3, -0.8]} delay={2} />
        
        <gridHelper args={[10, 10, '#2563EB', '#1E293B']} position={[0, -2, -3]} />
      </Canvas>
    </div>
  );
}
