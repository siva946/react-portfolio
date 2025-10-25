import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min.js'

function GlobalVantaBackground() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!effectRef.current && vantaRef.current) {
      try {
        effectRef.current = FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x00ddeb,
          midtoneColor: 0x4682b4,
          lowlightColor: 0xe6f0fa,
          baseColor: 0x0e1c26,
          blurFactor: 0.6,
          speed: 1,
        });
      } catch (err) {
        console.error('Vanta initialization failed:', err);
        setError(true);
      }
    }
    return () => {
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
        } catch (err) {
          console.error('Vanta cleanup failed:', err);
        }
        effectRef.current = null;
      }
    };
  }, []);

  if (error) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          background: "linear-gradient(135deg, #0e1c26 0%, #1a3a4a 100%)"
        }}
      />
    );
  }

  return (
    <div
      ref={vantaRef}
      id="vanta"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none"
      }}
    />
  );
}

export default GlobalVantaBackground;