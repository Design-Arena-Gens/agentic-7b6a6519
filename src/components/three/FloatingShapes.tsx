"use client";

import { Float, Icosahedron, MeshTransmissionMaterial } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

export function FloatingShapes(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <Float speed={1} rotationIntensity={0.6} floatIntensity={0.8}>
        <Icosahedron args={[1.2, 0]}>
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.4}
            roughness={0.25}
            transmission={0.95}
            ior={1.2}
            chromaticAberration={0.02}
            anisotropy={0.1}
            distortion={0.05}
            distortionScale={0.2}
            temporalDistortion={0.2}
            color="#7dd3fc"
          />
        </Icosahedron>
      </Float>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Icosahedron args={[0.6, 0]} position={[2.2, -0.3, -0.6]}>
          <meshStandardMaterial color="#a78bfa" roughness={0.2} metalness={0.6} />
        </Icosahedron>
      </Float>
      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icosahedron args={[0.8, 0]} position={[-2, 0.6, 0.2]}>
          <meshStandardMaterial color="#34d399" roughness={0.5} metalness={0.2} />
        </Icosahedron>
      </Float>
    </group>
  );
}
