"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Particles } from "@/components/three/Particles";
import { FloatingShapes } from "@/components/three/FloatingShapes";

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#05060a"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <Particles count={1800} radius={3.2} />
          <FloatingShapes />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(124,58,237,0.15),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.12),transparent_40%)]" />
    </div>
  );
}
