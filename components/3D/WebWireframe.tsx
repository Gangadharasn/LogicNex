'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WebWireframeModel() {
  const groupRef = useRef<THREE.Group>(null);
  const discsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (discsRef.current) {
      discsRef.current.children.forEach((disc, i) => {
        if (disc instanceof THREE.Group) {
          disc.position.y = 2.5 + Math.sin(state.clock.elapsedTime * 0.6 + i * 0.5) * 0.4;
          disc.rotation.y = state.clock.elapsedTime * 0.3 + i;
        }
      });
    }
  });

  // Create web-like structure (multiple connected boxes)
  const webStructure = [
    { pos: [0, 0, 0], size: [1.5, 1.5, 0.2] },
    { pos: [-1.8, 0, 0], size: [1, 1, 0.2] },
    { pos: [1.8, 0, 0], size: [1, 1, 0.2] },
    { pos: [0, -1.8, 0], size: [1, 1, 0.2] },
    { pos: [0, 1.8, 0], size: [1, 1, 0.2] },
  ];

  return (
    <group>
      {/* Grid Background - Simplified */}
      <gridHelper args={[12, 12, '#2563EB', '#1E293B']} position={[0, -2, -3]} />

      {/* Web Structure */}
      <group ref={groupRef}>
        {webStructure.map((box, i) => (
          <group key={i} position={box.pos}>
            {/* Wireframe */}
            <mesh>
              <boxGeometry args={box.size} />
              <meshBasicMaterial
                color="#E5E7EB"
                wireframe
                transparent
                opacity={0.7}
              />
            </mesh>
            {/* Solid face */}
            <mesh>
              <boxGeometry args={box.size} />
              <meshStandardMaterial
                color="#1E293B"
                transparent
                opacity={0.25}
                side={THREE.DoubleSide}
              />
            </mesh>
            
            {/* Corner dots */}
            {box.size[0] > 1.2 && [-1, 1].map(x => 
              [-1, 1].map(y => (
                <mesh key={`${x}-${y}`} position={[x * box.size[0]/2, y * box.size[1]/2, 0]}>
                  <sphereGeometry args={[0.06, 16, 16]} />
                  <meshStandardMaterial color="#E5E7EB" emissive="#2563EB" emissiveIntensity={0.6} />
                </mesh>
              ))
            )}
          </group>
        ))}
        
        {/* Connection lines */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={8}
              array={new Float32Array([
                -1.8, 0, 0,    0, 0, 0,     // box 1 to center
                0, 0, 0,       1.8, 0, 0,   // center to box 2
                0, 0, 0,       0, -1.8, 0,  // center to box 3
                0, 0, 0,       0, 1.8, 0,   // center to box 4
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#2563EB" transparent opacity={0.4} />
        </lineSegments>
      </group>

      {/* Floating Discs */}
      <group ref={discsRef}>
        {[
          { position: [-2, 2.5, -0.8], scale: [1, 0.1, 0.7] },
          { position: [2, 2.8, -1.2], scale: [0.8, 0.1, 0.6] },
          { position: [0, 3, -0.6], scale: [0.6, 0.1, 0.5] },
        ].map((disc, i) => (
          <group key={i} position={disc.position}>
            <mesh rotation={[Math.PI / 4, 0, Math.PI / 3]}>
              <cylinderGeometry args={[disc.scale[0], disc.scale[0], disc.scale[1], 32]} />
              <meshStandardMaterial
                color="#1E293B"
                metalness={0.9}
                roughness={0.1}
                emissive="#2563EB"
                emissiveIntensity={0.25}
              />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
              <planeGeometry args={[disc.scale[0] * 1.3, disc.scale[2] * 1.3]} />
              <meshStandardMaterial color="#000000" transparent opacity={0.3} />
            </mesh>
          </group>
        ))}
      </group>

      <pointLight position={[0, 4, 4]} intensity={0.6} color="#2563EB" />
      <pointLight position={[0, 0, 6]} intensity={0.4} color="#2563EB" />
    </group>
  );
}

export default function WebWireframe() {
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
        <WebWireframeModel />
      </Canvas>
    </div>
  );
}
