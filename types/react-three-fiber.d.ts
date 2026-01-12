// Type declarations for React Three Fiber JSX elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      boxGeometry: any;
      sphereGeometry: any;
      cylinderGeometry: any;
      planeGeometry: any;
      octahedronGeometry: any;
      icosahedronGeometry: any;
      meshBasicMaterial: any;
      meshStandardMaterial: any;
      meshPhysicalMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      spotLight: any;
      gridHelper: any;
      lineSegments: any;
      bufferGeometry: any;
      lineBasicMaterial: any;
    }
  }
}

export {};
