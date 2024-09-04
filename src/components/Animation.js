"use client"

import { Circle, Html, OrbitControls, Stats, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Loader = ()=> {
    const { progress } = useProgress()
    console.log(progress)
    return <Html center>{progress} % loaded</Html>
  }

const Animation = ()=> {

    const gltf = useLoader(GLTFLoader, '/model/character.glb')

  return (
    <div className='w-full h-full relative'>
    
    <div className="w-full">
    <Suspense fallback={<Loader />} >
      <Canvas className='w-full' camera={{ position: [1, 1, 2] }} shadows>
        <directionalLight
          position={[-1.3, 6.0, 4.4]}
          castShadow
          intensity={Math.PI * 1}
        />
        <primitive
          object={gltf.scene}
          position={[0, 1, 0]}
          children-0-castShadow
        />
        <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle>
        <OrbitControls target={[0, 1, 0]} />
        <axesHelper args={[5]} />
      </Canvas>
      </Suspense>
      </div>
    </div>
  );
};


export default Animation;