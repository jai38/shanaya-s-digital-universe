import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";

function Vinyl() {
  const ref = useRef<Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z -= dt * 0.6;
  });
  return (
    <group ref={ref} rotation={[Math.PI / 2.6, 0, 0]}>
      {/* disc */}
      <mesh>
        <cylinderGeometry args={[2.2, 2.2, 0.06, 96]} />
        <meshStandardMaterial color="#0a0a14" roughness={0.35} metalness={0.6} />
      </mesh>
      {/* grooves */}
      {[1.6, 1.4, 1.2, 1.0, 0.85].map((r, i) => (
        <mesh key={i} position={[0, 0.031, 0]}>
          <torusGeometry args={[r, 0.003, 8, 96]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
      ))}
      {/* label */}
      <mesh position={[0, 0.035, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.005, 64]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.4} />
      </mesh>
      {/* spindle */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

function Orb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.8} rotationIntensity={1} floatIntensity={1.4}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function VinylScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={60} color="#ec4899" />
        <pointLight position={[-5, -3, 4]} intensity={50} color="#22d3ee" />
        <pointLight position={[0, 4, -3]} intensity={30} color="#fbbf24" />
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
          <Vinyl />
        </Float>
        <Orb position={[-2.8, 1.6, 1]} color="#22d3ee" />
        <Orb position={[2.6, -1.4, 0.5]} color="#ec4899" />
        <Orb position={[2.2, 1.8, -1]} color="#fbbf24" />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}