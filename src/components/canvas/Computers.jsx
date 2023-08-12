import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, rotationAngles }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={10} groundColor="black" />
      <pointLight intensity={5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 50 : 80}
        position={isMobile ? [0, -0.5, 0] : [0, -0.2, -1.2]}
        rotation={rotationAngles}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotationAngles, setRotationAngles] = useState([0, 0, 0]);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    // Update rotation angles over time for continuous rotation
    const rotationSpeed = 0.005; // Adjust this value to control the rotation speed
    const animationId = requestAnimationFrame(function animate() {
      setRotationAngles((prevAngles) => [
        prevAngles[0] + rotationSpeed,
        prevAngles[1] + rotationSpeed,
        prevAngles[2] + rotationSpeed,
      ]);
      requestAnimationFrame(animate);
    });

    // Cancel the animation frame when the component unmounts
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} rotationAngles={rotationAngles} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;



