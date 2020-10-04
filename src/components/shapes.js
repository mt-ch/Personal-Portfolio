import React, { useRef, useState } from "react";
import { extend, Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { AmbientLight } from "three";
import { Physics, usePlane, useBox } from "@react-three/cannon";

function Plane(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    mass: 0,
    ...props
  }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[5, 5]} />
      <shadowMaterial attach="material" color="#171717" opacity={0.5} />
    </mesh>
  );
}

function Cube(props) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5],
    ...props
  }));

  useFrame(() =>
    api
      .at(Math.floor(Math.random() * 1))
      .position.set(0, Math.random() * 2, 0)
  );

  return (
    <instancedMesh ref={ref} args={[null, null, 1]}>
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} >

      </boxBufferGeometry>
      <meshLambertMaterial attach="material" />
    </instancedMesh>
  );
}

function Triangle(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

export default function Shapes() {
  return (
    <div>
      <Canvas
        camera={{ position: [-1, 1, 2.5], fov: 50 }}
        style={{ height: "100vh", width: "100vw", background: "lightyellow" }}
        shadowMap
        colorManagement
      >
        {/* <Triangle position={[0, 0, 0]}/>
        <directionalLight />
        <hemisphereLight/> */}
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize-width={256}
          shadow-mapSize-height={256}
        />
        <hemisphereLight intensity={0.35} />

        <Physics>
          <Plane />
          <Cube />
        </Physics>
      </Canvas>
    </div>
  );
}
