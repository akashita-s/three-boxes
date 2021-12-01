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
  const input = useSelector((state) => state.input.value);
  const dispatch = useDispatch();

  const Box = (props) => {
    const animate = useSpring({
      from: { position: [input.x1, input.y1, input.z1]},
      to: { position: [2, 2, 0] },
    });

    return (
      <a.mesh {...props} {...animate}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={currentColor} />
      </a.mesh>
    );
  };

  const Box2 = (props) => {
    const animate = useSpring({
      from: { position: [input.x2, input.y2, input.z2] },
      to: { position: [0, 0, 0] },
    });

    return (
      <a.mesh {...props} {...animate}>
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
            onClick={() => {
              dispatch(changeBox("Box 2"));
            }}
          />

          <Box2
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
