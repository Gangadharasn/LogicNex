'use client';

import { useState, useEffect } from 'react';
import DiamondWrapper from './DiamondWrapper';

export default function FloatingOrbsWrapper() {
  const [ClientOrbsScene, setClientOrbsScene] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // Only import on client side after mount
    if (typeof window !== 'undefined') {
      import('./OrbsScene').then((module) => {
        setClientOrbsScene(() => module.default);
      }).catch((error) => {
        console.error('Failed to load OrbsScene:', error);
      });
    }
  }, []);

  if (!ClientOrbsScene) {
    return <DiamondWrapper />;
  }

  return <ClientOrbsScene />;
}
