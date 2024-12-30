import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

export function GDGLogo() {
  const meshRef = useRef<Mesh>(null);

  // Rotation animation
  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  // Function to create a shape (upper or lower half of a left or right angle) with curved endpoints
  const createHalfAngleShape = (isLeft: boolean, isUpper: boolean) => {
    const shape = new THREE.Shape();

    if (isLeft) {
      if (isUpper) {
        // Upper half of left angle <
        shape.moveTo(0.8, 0); // Reduced width
        shape.lineTo(0, 0);
        shape.lineTo(0.4, 1.4); // Increased height
        shape.quadraticCurveTo(0.8, 2, 1.2, 1.4); // Sharper inward curve
        shape.lineTo(0.8, 0);
      } else {
        // Lower half of left angle <
        shape.moveTo(0.8, 0); // Reduced width
        shape.lineTo(0, 0);
        shape.lineTo(0.4, -1.4); // Increased height
        shape.quadraticCurveTo(0.8, -2, 1.2, -1.4); // Sharper inward curve
        shape.lineTo(0.8, 0);
      }
    } else {
      if (isUpper) {
        // Upper half of right angle >
        shape.moveTo(-0.8, 0); // Reduced width
        shape.lineTo(0, 0);
        shape.lineTo(-0.4, 1.4); // Increased height
        shape.quadraticCurveTo(-0.8, 2, -1.2, 1.4); // Sharper inward curve
        shape.lineTo(-0.8, 0);
      } else {
        // Lower half of right angle >
        shape.moveTo(-0.8, 0); // Reduced width
        shape.lineTo(0, 0);
        shape.lineTo(-0.4, -1.4); // Increased height
        shape.quadraticCurveTo(-0.8, -2, -1.2, -1.4); // Sharper inward curve
        shape.lineTo(-0.8, 0);
      }
    }

    return shape;
  };

  // Extrude geometry settings
  const extrudeSettings = {
    steps: 1,
    depth: 0.15, // Thinner symbols
    bevelEnabled: false, // Bevel is disabled for a cleaner look
  };

  return (
    <group ref={meshRef}>
      {/* Left symbol < with green on top and yellow on bottom */}
      <mesh position={[-1.6, 0, 0]}> {/* Increased gap */}
        <extrudeGeometry args={[createHalfAngleShape(true, true), extrudeSettings]} />
        <meshPhysicalMaterial 
          color="#0F9D58" // Green
          metalness={0.4}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      <mesh position={[-1.6, 0, 0]}>
        <extrudeGeometry args={[createHalfAngleShape(true, false), extrudeSettings]} />
        <meshPhysicalMaterial 
          color="#F4B400" // Yellow
          metalness={0.4}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Right symbol > with red on top and blue on bottom */}
      <mesh position={[1.6, 0, 0]}> {/* Increased gap */}
        <extrudeGeometry args={[createHalfAngleShape(false, true), extrudeSettings]} />
        <meshPhysicalMaterial 
          color="#DB4437" // Red
          metalness={0.4}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      <mesh position={[1.6, 0, 0]}>
        <extrudeGeometry args={[createHalfAngleShape(false, false), extrudeSettings]} />
        <meshPhysicalMaterial 
          color="#4285F4" // Blue
          metalness={0.4}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </group>
  );
}
