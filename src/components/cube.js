"use client"
import * as THREE from 'three'
import { Canvas,useFrame,ThreeElements } from "@react-three/fiber";
import React,{ useRef, useState, } from "react";
import { OrbitControls } from '@react-three/drei'

function Box(props){//}:ThreeElements['mesh']){

    const ref=useRef(THREE.Mesh)//(null)//(null!)
    const [clicked,setClicked]=useState(false)
    const [hovered,setHovered]=useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    useFrame((state, delta) => (ref.current.rotation.y += delta))
    return(             
        <mesh
            {...props} 
            ref={ref} 
            scale={clicked?1.5:1} 
            onClick={(event)=>{setClicked(!clicked)}}  
            onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
            onPointerOut={(event) => setHovered(false)}
        >   
            <boxGeometry args={[4,4,4]}/>
            <meshStandardMaterial color={hovered ? 'hotpink' : 'white'} />
        </mesh>
    ) 
}

export default function Cube(){
    return(
            <Canvas>               
                <ambientLight />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[-1.8, 0, 0]}/>
                <OrbitControls />
            </Canvas>
    )
}