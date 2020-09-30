import React, { useRef, useState } from "react";
import { extend, Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { AmbientLight } from "three";

function Triangle(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
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
      <meshLambertMaterial attach="material" color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}


export default function Shapes() {
  return (
    <div>
      <Canvas
        camera={{ fov: 100, position: [0, 0, -3] }}
        style={{ height: "100vh", width: "100vw", background: "black" }}
      >
        <Triangle position={[0, 0, 0]}/>
        <directionalLight />
        <hemisphereLight/>
      </Canvas>
    </div>
  );
};

