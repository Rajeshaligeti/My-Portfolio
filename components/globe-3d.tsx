"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"

// Globe model component
function GlobeModel() {
  const { scene } = useGLTF("/stylized_planet.glb")
  
  return (
    <primitive 
      object={scene} 
      scale={2.5} 
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

// Loading fallback
function GlobeLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

export default function Globe3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <GlobeModel />
          <OrbitControls 
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Preload the model
useGLTF.preload("/stylized_planet.glb")
