import { Canvas } from "@react-three/fiber";
import SideBar from "./components/SideBar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeBox } from "../src/features/box";
import NavigationBar from "./components/NavigationBar";
import React from "react";
import { a, useSpring } from "@react-spring/three";

function App() {
  const currentColor = useSelector((state) => state.color.value);
  const dispatch = useDispatch();

  const Box = (props) => {

    const animate = useSpring({
      loop: { reverse: true },
      from: { position: [-4, 2, 0] },
      to: { position: [1, 0, 0] }
    })
    
    return (
      <a.mesh castShadow {...props}{...animate}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={currentColor} />
      </a.mesh>
    );
  };

  return (
    <div className="App">
      <NavigationBar />

      <div
        style={{
          height: "100vh",
          marginTop: "200px",
        }}
      >
        <Canvas colorManagement camera={{ position: [-5, 0, 10], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[-5, -10, -20]} intensity={0.7} />
          <Box
            position={[0, 2, 0]}
            onClick={() => {
              dispatch(changeBox("Box 2"));
            }}
          />

          <Box
            position={[-4, 2, 0]}
            onClick={() => {
              dispatch(changeBox("Box 1"));
            }}
          />
        </Canvas>
      </div>
      <SideBar />
    </div>
  );
}

export default App;
