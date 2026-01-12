'use client';

import { useState, useEffect } from 'react';

export default function LaptopWrapper() {
  const [ClientLaptop, setClientLaptop] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('./Laptop').then((module) => {
        setClientLaptop(() => module.default);
      }).catch((error) => {
        console.error('Failed to load Laptop:', error);
      });
    }
  }, []);

  if (!ClientLaptop) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0F172A]">
        <div className="animate-pulse text-[#2563EB]">Loading...</div>
      </div>
    );
  }

  return <ClientLaptop />;
}
