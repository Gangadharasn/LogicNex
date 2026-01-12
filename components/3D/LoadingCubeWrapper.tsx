'use client';

import { useState, useEffect } from 'react';

export default function LoadingCubeWrapper() {
  const [ClientLoadingCube, setClientLoadingCube] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('./LoadingCube').then((module) => {
        setClientLoadingCube(() => module.default);
      }).catch((error) => {
        console.error('Failed to load LoadingCube:', error);
      });
    }
  }, []);

  if (!ClientLoadingCube) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0F172A]">
        <div className="animate-pulse text-[#2563EB]">Loading...</div>
      </div>
    );
  }

  return <ClientLoadingCube />;
}
