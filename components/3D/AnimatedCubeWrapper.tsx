'use client';

import { useState, useEffect } from 'react';
import LoadingCubeWrapper from './LoadingCubeWrapper';

export default function AnimatedCubeWrapper() {
  const [ClientCubeScene, setClientCubeScene] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // Only import on client side after mount
    if (typeof window !== 'undefined') {
      import('./CubeScene').then((module) => {
        setClientCubeScene(() => module.default);
      }).catch((error) => {
        console.error('Failed to load CubeScene:', error);
      });
    }
  }, []);

  if (!ClientCubeScene) {
    return <LoadingCubeWrapper />;
  }

  return <ClientCubeScene />;
}
