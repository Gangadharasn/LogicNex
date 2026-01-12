'use client';

import { useState, useEffect } from 'react';

export default function DiamondWrapper() {
  const [ClientDiamond, setClientDiamond] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('./Diamond').then((module) => {
        setClientDiamond(() => module.default);
      }).catch((error) => {
        console.error('Failed to load Diamond:', error);
      });
    }
  }, []);

  if (!ClientDiamond) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0F172A]">
        <div className="animate-pulse text-[#2563EB]">Loading...</div>
      </div>
    );
  }

  return <ClientDiamond />;
}
