'use client';

import { useState, useEffect } from 'react';

export default function WebWireframeWrapper() {
  const [ClientWebWireframe, setClientWebWireframe] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('./WebWireframe').then((module) => {
        setClientWebWireframe(() => module.default);
      }).catch((error) => {
        console.error('Failed to load WebWireframe:', error);
      });
    }
  }, []);

  if (!ClientWebWireframe) {
    return (
      <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-[#0F172A]">
        <div className="animate-pulse text-[#2563EB]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[200px]">
      <ClientWebWireframe />
    </div>
  );
}
