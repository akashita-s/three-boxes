import "./App.css";
import { Canvas } from "@react-three/fiber";
import SideBar from "./components/SideBar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeBox } from "../src/features/box";
import NavigationBar from "./components/NavigationBar";

function App() {
  const currentColor = useSelector((state) => state.color.value);
  const dispatch = useDispatch();

  const Box = (props) => {
    return (
      <mesh {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={currentColor} />
      </mesh>
    );
  };

  return (
    <div className="App">
      <NavigationBar />

      <div
        style={{
          height: "80vh",
          diplay: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "300px",
        }}
      >
        <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <Box
            position={[2, 2, 0]}
            color="pink"
            onClick={() => {
              dispatch(changeBox("Box 2"));
            }}
          />
          <Box
            position={[-2, 2, 0]}
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
