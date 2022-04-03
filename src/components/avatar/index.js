import * as THREE from "three";

import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Bounds, useBounds, OrbitControls, ContactShadows, useGLTF } from '@react-three/drei'
import Model from "./model";

export default function M() {
  const [position, setPosition] = useState([0, 0, 0]);
  useEffect(() => {
    setInterval((e) => setPosition([0, -1, 0]), 1000);
    // setInterval(() => {
    //   setposition([0, -1, 0]);
    // }, 1001);
  }, []);

  useEffect(() => {
    window.model = (e) => setPosition(e);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        linear
        gl={{ toneMappingExposure: 1.5 }}
        // Clamp window.devicePixelRatio between 1-2, this is the default on v8
        dpr={[1, 2]}
        camera={{
          position: [0, 1, 5],
          fov: 50,
          near: 1,
          far: -50000,
          rotation: [-0.02, 0, 0],
        }}
      >
        <Suspense
          fallback={() => {
            console.log("loading");
            return <div>loading</div>;
          }}
        >
          <Model class="car" />
        </Suspense>
        {/* <OrbitControls position={[0, -1, 0]} /> */}
        <directionalLight
          castShadow
          position={[50, 20, 80]}
          intensity={0.5}
          shadow-mapSize-shadowMapWidth={2048}
          shadow-mapSize-shadowMapHeight={2048}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={-50}
          shadow-camera-bottom={10}
        />
        {/* <axesHelper /> */}
        <pointLight position={[50, 10, 50]} intensity={0.1} />
        <pointLight position={[0, 10, 5]} intensity={0.1} />
        <hemisphereLight
          intensity={0.1}
          groundColor={0x4a4a4a}
          color={0xd9d8d7}
        />
        {/* <ambientLight /> */}
        <spotLight
          position={[0, 100, 50]}
          color={0xf0f5fc}
          intensity={2}
          castShadow={true}
          shadowBias={0.1}
          shadow={{
            mapSize: {
              width: 512 * 4,
              height: 512 * 4,
            },
          }}
        />
      </Canvas>
    </div>
  );
}
