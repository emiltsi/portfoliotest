/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.02, -0.01, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={0.58}>
        <mesh geometry={nodes.boot_0.geometry} material={nodes.boot_0.material} />
        <mesh geometry={nodes.boot001_0.geometry} material={nodes.boot001_0.material} />
        <mesh geometry={nodes.boot002_0.geometry} material={nodes.boot002_0.material} />
        <mesh geometry={nodes.boot003_0.geometry} material={nodes.boot003_0.material} />
        <mesh geometry={nodes.boot004_0.geometry} material={nodes.boot004_0.material} />
        <mesh geometry={nodes.boot005_0.geometry} material={nodes.boot005_0.material} />
        <mesh geometry={nodes.boot006_0.geometry} material={nodes.boot006_0.material} />
        <mesh geometry={nodes.boot007_0.geometry} material={materials['logo.002']} />
        <mesh geometry={nodes.boot008_0.geometry} material={nodes.boot008_0.material} />
        <mesh geometry={nodes.boot009_0.geometry} material={nodes.boot009_0.material} />
        <mesh geometry={nodes.boot010_0.geometry} material={nodes.boot010_0.material} />
        <mesh geometry={nodes.boot011_0.geometry} material={nodes.boot011_0.material} />
        <mesh geometry={nodes.boot011_0001.geometry} material={nodes.boot011_0001.material} />
        <mesh geometry={nodes.bumper_front001_0.geometry} material={nodes.bumper_front001_0.material} />
        <mesh geometry={nodes.bumper_front001_1.geometry} material={nodes.bumper_front001_1.material} />
        <mesh geometry={nodes.bumper_front001_2.geometry} material={nodes.bumper_front001_2.material} />
        <mesh geometry={nodes.bumper_front003_0.geometry} material={nodes.bumper_front003_0.material} />
        <mesh geometry={nodes.bumper_front003_1.geometry} material={nodes.bumper_front003_1.material} />
        <mesh geometry={nodes.bumper_front004_0.geometry} material={nodes.bumper_front004_0.material} />
        <mesh geometry={nodes.bumper_front004_1.geometry} material={nodes.bumper_front004_1.material} />
        <mesh geometry={nodes.bumper_front004_2.geometry} material={nodes.bumper_front004_2.material} />
        <group rotation={[-0.01, 0, 0]} scale={1.04}>
          <mesh geometry={nodes.bumper_front007_0.geometry} material={nodes.bumper_front007_0.material} />
        </group>
        <mesh geometry={nodes.bumper_front009_0.geometry} material={nodes.bumper_front009_0.material} />
        <group position={[0.04, -1.56, 0.33]} rotation={[0.71, -0.07, -0.24]} scale={0.01}>
          <mesh geometry={nodes.Cube001_0.geometry} material={nodes.Cube001_0.material} />
        </group>
        <group scale={[0.33, 0.32, 0.32]}>
          <mesh geometry={nodes.Cube002_0.geometry} material={nodes.Cube002_0.material} />
        </group>
        <group position={[0, 0, 0.03]}>
          <mesh geometry={nodes.Cylinder000_0.geometry} material={nodes.Cylinder000_0.material} />
          <mesh geometry={nodes.Cylinder000_1.geometry} material={nodes.Cylinder000_1.material} />
          <mesh geometry={nodes.Cylinder000_2.geometry} material={nodes.Cylinder000_2.material} />
          <mesh geometry={nodes.Cylinder000_3.geometry} material={nodes.Cylinder000_3.material} />
        </group>
        <group position={[0, 0, 0.03]}>
          <mesh geometry={nodes.Cylinder001_0.geometry} material={nodes.Cylinder001_0.material} />
          <mesh geometry={nodes.Cylinder001_1.geometry} material={nodes.Cylinder001_1.material} />
          <mesh geometry={nodes.Cylinder001_2.geometry} material={nodes.Cylinder001_2.material} />
          <mesh geometry={nodes.Cylinder001_3.geometry} material={nodes.Cylinder001_3.material} />
        </group>
        <group position={[-2, -4.41, 4.47]} rotation={[0.62, -0.13, -0.01]} />
        <group position={[1.43, 0.24, 2.63]} rotation={[-2.04, 1.23, 1.19]} />
        <group position={[0.01, 3.58, 0.11]}>
          <mesh geometry={nodes.Plane001_0.geometry} material={nodes.Plane001_0.material} />
        </group>
        <group position={[-1.05, 3.51, -0.13]} rotation={[-1.44, -0.62, 0.78]} scale={0.02}>
          <mesh geometry={nodes.Plane002_0.geometry} material={nodes.Plane002_0.material} />
        </group>
        <group position={[0.44, 3.72, -0.12]} rotation={[-1.48, 0.1, 0.8]} scale={0.02}>
          <mesh geometry={nodes.Plane003_0.geometry} material={nodes.Plane003_0.material} />
        </group>
        <group position={[-0.49, 3.68, -0.33]} rotation={[-1.42, -0.04, 0.8]} scale={0.06}>
          <mesh geometry={nodes.Plane004_0.geometry} material={nodes.Plane004_0.material} />
        </group>
        <group position={[0, 3.7, -0.29]} rotation={[0.11, 0, 0]} scale={[0.39, 0.39, 0.36]}>
          <mesh geometry={nodes.Plane005_0.geometry} material={materials['license.003']} position={[0.04, 0, 0]} scale={[1, 1, -1]} />
        </group>
        <group position={[0, -3.75, -0.43]} rotation={[0.08, 0, -Math.PI]} scale={[0.4, 0.4, 0.36]}>
          <mesh geometry={nodes.Plane006_0.geometry} material={materials['license.002']} />
        </group>
        <mesh geometry={nodes.underbody_0.geometry} material={nodes.underbody_0.material} />
        <mesh geometry={nodes.window_rear_0.geometry} material={nodes.window_rear_0.material} />
        <mesh geometry={nodes.window_rear001_0.geometry} material={nodes.window_rear001_0.material} />
        <group position={[0, 0, 0.01]}>
          <mesh geometry={nodes.windshield_0.geometry} material={nodes.windshield_0.material} />
          <mesh geometry={nodes.windshield_1.geometry} material={nodes.windshield_1.material} />
        </group>
      </group>
      <group position={[-0.02, -0.01, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={0.58} />
    </group>
  )
}

useGLTF.preload('/model.glb')
