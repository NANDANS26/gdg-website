import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { GDGLogo } from './GDGLogo'

export function Logo3D() {
  return (
    <div className="logo-3d-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.7} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <GDGLogo />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}