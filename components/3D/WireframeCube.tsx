'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireframeCubeModel() {
  const cubeRef = useRef<THREE.Group>(null);
  const discsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      cubeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (discsRef.current) {
      discsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      discsRef.current.children.forEach((discGroup, i) => {
        if (discGroup instanceof THREE.Group) {
          const baseY = discGroup.position.y;
          discGroup.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.3;
          discGroup.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.2;
        }
      });
    }
  });

  return (
    <group>
      {/* Grid Background - Simplified */}
      <gridHelper args={[10, 10, '#2563EB', '#1E293B']} position={[0, -2, -3]} />

      {/* Wireframe Cube */}
      <group ref={cubeRef} position={[0, -0.5, 0]}>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial
            color="#E5E7EB"
            wireframe
            transparent
            opacity={0.8}
            linewidth={2}
          />
        </mesh>
        
        {/* Solid faces for depth */}
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color="#1E293B"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Corner vertices */}
        {[-1, 1].map(x => 
          [-1, 1].map(y =>
            [-1, 1].map(z => (
              <mesh key={`${x}-${y}-${z}`} position={[x, y, z]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#E5E7EB" emissive="#2563EB" emissiveIntensity={0.8} />
              </mesh>
            ))
          )
        )}
      </group>

      {/* Floating Discs */}
      <group ref={discsRef}>
        {[
          { position: [-1.5, 2.5, -0.5], scale: [1.2, 0.1, 0.8], delay: 0 },
          { position: [1.5, 3, -1], scale: [0.9, 0.1, 0.7], delay: 1 },
          { position: [0.5, 2.3, -0.8], scale: [0.6, 0.1, 0.5], delay: 2 },
        ].map((disc, i) => (
          <group key={i} position={disc.position}>
            <mesh rotation={[Math.PI / 6, 0, Math.PI / 4]}>
              <cylinderGeometry args={[disc.scale[0], disc.scale[0], disc.scale[1], 32]} />
              <meshStandardMaterial
                color="#1E293B"
                metalness={0.8}
                roughness={0.2}
                emissive="#2563EB"
                emissiveIntensity={0.2}
              />
            </mesh>
            {/* Shadow */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
              <planeGeometry args={[disc.scale[0] * 1.5, disc.scale[2] * 1.5]} />
              <meshStandardMaterial
                color="#000000"
                transparent
                opacity={0.3}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* Ambient glow */}
      <pointLight position={[0, 3, 3]} intensity={0.5} color="#2563EB" />
      <pointLight position={[0, 0, 5]} intensity={0.3} color="#2563EB" />
    </group>
  );
}

export default function WireframeCube() {
  return (
    <div className="w-full h-full" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Canvas 
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} 
        style={{ width: '100%', height: '100%', display: 'block' }}
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#E5E7EB" />
        <pointLight position={[0, 3, 3]} intensity={0.8} color="#2563EB" />
        <WireframeCubeModel />
      </Canvas>
    </div>
  );
}
