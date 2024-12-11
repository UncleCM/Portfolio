import { useAnimations, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
// Import the model directly
import SpaceBreaker from './3D/SpaceBreaker.glb';

// Error Fallback component
const ErrorFallback = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

// Loading component
const LoadingFallback = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="yellow" wireframe />
    </mesh>
  );
};

// Model component that handles the 3D model
const Model = () => {
  const model = useRef();
  const [error, setError] = useState(null);

  try {
    const { scene, animations } = useGLTF(SpaceBreaker);
    const { actions } = useAnimations(animations, model);

    useEffect(() => {
      if (actions?.SpaceBreaker) {
        actions.SpaceBreaker.play();
      }
    }, [actions]);

    return <primitive object={scene} ref={model} position={[0, -1, 0]} scale={1} />;
  } catch (err) {
    console.error("Error loading model:", err);
    setError(err);
    return <ErrorFallback />;
  }
};

// Main Hero component
const Hero = () => {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{
          position: [0, 2, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          {/* Add lights */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          {/* Add the 3D model */}
          <Model />

          {/* Add some basic environment setup */}
          <color attach="background" args={['#1a1a1a']} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero;