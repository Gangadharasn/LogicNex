'use client';

import { useState, useEffect } from 'react';

export default function WireframeCubeWrapper() {
  const [ClientWireframe, setClientWireframe] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load immediately without delay
      Promise.resolve().then(() => {
        import('./WireframeCube')
          .then((module) => {
            setClientWireframe(() => module.default);
          })
          .catch((err) => {
            console.error('Failed to load WireframeCube, trying SimpleWireframe:', err);
            // Fallback to simpler version
            return import('./SimpleWireframe')
              .then((module) => {
                setClientWireframe(() => module.default);
              });
          })
          .catch((err) => {
            console.error('Failed to load all 3D components:', err);
            setError(err.message || 'Failed to load 3D scene. Please check browser console.');
          });
      });
    }
  }, []);

  if (error) {
    return (
      <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#0F172A] border border-[#2563EB]/30 rounded-lg">
        <div className="text-[#2563EB] text-center p-4">
          <p className="mb-2">3D Scene Error</p>
          <p className="text-sm text-[#E5E7EB]/60">{error}</p>
        </div>
      </div>
    );
  }

  if (!ClientWireframe) {
    return (
      <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#0F172A] border border-[#2563EB]/30 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <div className="animate-pulse text-[#2563EB] text-lg">Loading 3D Scene...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px] relative">
      <ClientWireframe />
    </div>
  );
}
