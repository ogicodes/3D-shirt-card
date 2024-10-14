"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";





function Model() {
  const { scene } = useGLTF("/UrMom.glb"); // path to your .glb file
  return <primitive object={scene} scale={4.2} />;
}

export default function Home() {


  return (
    <main className="h-dvh w-dvh flex justify-center items-center relative">
    <CardContainer className="inter-var text-white">
      <CardBody className="bg-transparent border-[1px] border-white relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6">
        <CardItem
          translateZ="200"
          translateY={-30}
          className="text-3xl font-bold"
        >
          Untitled&Co Shirt in Pink
        </CardItem>
        <CardItem
          translateZ={300}
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Canvas style={{ width: 375, height: 250 }}>
            <Suspense fallback={null}>
              <Float speed={2} rotationIntensity={2} floatIntensity={2}>
              <ambientLight intensity={1.4} />
              <directionalLight position={[5, 5, 5]} />
              <Model />
              <OrbitControls />
              </Float>
            </Suspense>
          </Canvas>
        </CardItem>
        <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={200}
            translateY={40}
            as="button"
            className="px-4 py-2 rounded-xl text-xl font-bold dark:text-white"
          >
            $208.00
          </CardItem>
          <CardItem
            translateZ={200}
            translateY={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-white  text-black text-md font-bold"
          >
            Buy Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <BackgroundBeams className="z-[-1] bg-black" />
    </main>
  );
}
