'use client';

import { useState, useEffect } from 'react';

export default function LaptopWireframeWrapper() {
  const [ClientLaptopWireframe, setClientLaptopWireframe] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('./LaptopWireframe').then((module) => {
        setClientLaptopWireframe(() => module.default);
      }).catch((error) => {
        console.error('Failed to load LaptopWireframe:', error);
      });
    }
  }, []);

  if (!ClientLaptopWireframe) {
    return (
      <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-[#0F172A]">
        <div className="animate-pulse text-[#2563EB]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[200px]">
      <ClientLaptopWireframe />
    </div>
  );
}
