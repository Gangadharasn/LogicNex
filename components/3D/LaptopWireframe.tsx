'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function LaptopWireframeModel() {
  const groupRef = useRef<THREE.Group>(null);
  const discsRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
    }
    if (discsRef.current) {
      discsRef.current.children.forEach((disc, i) => {
        if (disc instanceof THREE.Group) {
          disc.position.y = 2.5 + Math.sin(state.clock.elapsedTime * 0.5 + i * 0.7) * 0.3;
          disc.rotation.x = Math.sin(state.clock.elapsedTime * 0.4 + i) * 0.15;
        }
      });
    }
  });

  return (
    <group>
      {/* Grid Background - Simplified */}
      <gridHelper args={[12, 12, '#2563EB', '#1E293B']} position={[0, -2, -3]} />

      {/* Laptop Base */}
      <group ref={groupRef}>
        <mesh position={[0, -0.8, 0]}>
          <boxGeometry args={[2.5, 0.15, 1.8]} />
          <meshBasicMaterial color="#E5E7EB" wireframe transparent opacity={0.6} />
          <meshStandardMaterial
            color="#1E293B"
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Screen */}
        <mesh
          ref={screenRef}
          position={[0, 0.3, -0.9]}
          rotation={[-0.3, 0, 0]}
        >
          <boxGeometry args={[2.5, 1.8, 0.1]} />
          <meshBasicMaterial color="#E5E7EB" wireframe transparent opacity={0.7} />
          <meshStandardMaterial
            color="#1E293B"
            transparent
            opacity={0.3}
            emissive="#2563EB"
            emissiveIntensity={0.3}
            side={THREE.DoubleSide}
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
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Corner vertices for base */}
        {[-1.25, 1.25].map(x => 
          [-0.875, -0.725].map(y =>
            [-0.9, 0.9].map(z => (
              <mesh key={`base-${x}-${y}-${z}`} position={[x, y, z]}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial color="#E5E7EB" emissive="#2563EB" emissiveIntensity={0.5} />
              </mesh>
            ))
          )
        )}

        {/* Corner vertices for screen */}
        {[-1.25, 1.25].map(x => 
          [0.3 - 0.9, 0.3 + 0.9].map(y => (
            <mesh 
              key={`screen-${x}-${y}`} 
              position={[x, y, -0.9]}
              rotation={[-0.3, 0, 0]}
            >
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial color="#E5E7EB" emissive="#2563EB" emissiveIntensity={0.6} />
            </mesh>
          ))
        )}
      </group>

      {/* Floating Discs */}
      <group ref={discsRef}>
        {[
          { position: [-1.8, 2.5, -0.6], scale: [1.1, 0.1, 0.8] },
          { position: [1.8, 2.7, -1], scale: [0.9, 0.1, 0.7] },
          { position: [0, 3, -0.5], scale: [0.7, 0.1, 0.6] },
        ].map((disc, i) => (
          <group key={i} position={disc.position}>
            <mesh rotation={[Math.PI / 5, 0, Math.PI / 4]}>
              <cylinderGeometry args={[disc.scale[0], disc.scale[0], disc.scale[1], 32]} />
              <meshStandardMaterial
                color="#1E293B"
                metalness={0.85}
                roughness={0.15}
                emissive="#2563EB"
                emissiveIntensity={0.25}
              />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
              <planeGeometry args={[disc.scale[0] * 1.4, disc.scale[2] * 1.4]} />
              <meshStandardMaterial color="#000000" transparent opacity={0.3} />
            </mesh>
          </group>
        ))}
      </group>

      <pointLight position={[0, 4, 4]} intensity={0.6} color="#2563EB" />
      <pointLight position={[0, 0, 6]} intensity={0.4} color="#2563EB" />
      <spotLight position={[0, 5, 2]} intensity={0.5} color="#2563EB" angle={0.4} />
    </group>
  );
}

export default function LaptopWireframe() {
  return (
    <div className="w-full h-full min-h-[200px]" style={{ width: '100%', height: '100%', minHeight: '200px' }}>
      <Canvas 
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} 
        style={{ width: '100%', height: '100%', display: 'block' }}
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#E5E7EB" />
        <LaptopWireframeModel />
      </Canvas>
    </div>
  );
}
