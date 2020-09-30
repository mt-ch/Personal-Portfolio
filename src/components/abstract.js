import React, { useRef, useState, Suspense } from "react";
import { extend, Canvas, useFrame, useThree } from "react-three-fiber";
import fonts from "../assets/fonts/fonts";
import lerp from "lerp";
import Text from "./Text";
import * as THREE from "three";

// function Plane() {
//   // make a mesh
//   const mesh = useRef();
//   // rotate plane every frame
//   useFrame(() => (mesh.current.rotation.z += 0.01));
//   // load texture of track onto mesh
//   // const texture = new THREE.TextureLoader().load(require(`../../assets/tracks/${track.track}.png`))
//   return (
//     <mesh
//       // position the scene
//       position={[0, 0, 0]}
//       rotation={[-1, 0, 0]}
//       ref={mesh}
//     >
//       <planeBufferGeometry attach="geometry" args={[4, 4]} />
//       <meshPhongMaterial attach="material" />
//     </mesh>
//   );
// }

// function Text(){
//   const mesh = useRef();
//   const fontJson = require( "../assets/fonts/droid_sans_mono_regular.typeface.json" );
//   const font = new THREE.Font( fontJson );
//   return(
//     <mesh userData={{ hello: 'world' }} position={[0,0,0]} ref={mesh}>
//       <textGeometry font={font} size={80} height={5}/>
//       <meshPhongMaterial attach="material" />
//     </mesh>
//   )
// }
function Number({ mouse, hover }) {
  const ref = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  return (
    <Suspense fallback={null}>
      <group ref={ref}>
        <Text
          
        >
          DESIGN
        </Text>
      </group>
    </Suspense>
  );
}

const Abstract = () => {
  const mouse = useRef([0, 0]);

  return (
    <Canvas
      camera={{ fov: 100, position: [0, 0, 15] }}
      style={{ height: "100vh", width: "100vw", background: "grey" }}
      // onCreated={({ gl }) => {
      //   gl.toneMapping = THREE.Uncharted2ToneMapping
      //   gl.setClearColor(new THREE.Color('#020207'))
      // }}>
    >
      <pointLight distance={100} intensity={4} color="white" />
      <Number />
    </Canvas>
  );
};

export default Abstract;

// const [opts, setOpts] = useState({
//   font: "Philosopher",
//   fontSize: 12,
//   color: "#99ccff",
//   maxWidth: 300,
//   lineHeight: 1,
//   letterSpacing: 0,
//   textAlign: "justify",
//   materialType: "MeshPhongMaterial"
// });

// export class abstract extends Component {
//   constructor(props){

//   }
//   render() {
//     return (
//       <div>
//         <Canvas
//       // camera={{ fov: 120, position: [0, 0,  5], near: 0.1, far: 5 }}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%"
//       }}
//     >
//       <text
//           position-z={-180}
//           {...opts}
//           text={text}
//           font={fonts[opts.font]}
//           anchorX="center"
//           anchorY="middle"
//         >
//           {opts.materialType === "MeshPhongMaterial" ? (
//             <meshPhongMaterial attach="material" color={opts.color} />
//           ) : null}
//         </text>

//         <pointLight position={[-100, 0, -160]} />
//         <pointLight position={[0, 0, -170]} />
//         <pointLight position={[100, 0, -160]} />
//     </Canvas>
//       </div>
//     )
//   }
// }

// export default abstract
