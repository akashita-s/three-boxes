import "./App.css";
import { AppBar, Typography, Toolbar, Drawer, Button } from "@material-ui/core";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import SideBar from "./components/SideBar";

function App() {
  const [box, setBox] = useState("Box 1");
  const [position, setPosition] = useState([-2, 2, 0]);
  const [color, setcolor] = useState("brown");

  const Box = (props) => {
    return (
      <mesh position={position} {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    );
  };

  return (
    <div className="App">
      <AppBar position="sticky" color="#fff">
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6">{box}</Typography>
        </Toolbar>
      </AppBar>

      <div
        style={{
          height: "80vh",
          diplay: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "300px",
        }}
      >
        <Canvas colorManagement>
          <ambientLight intensity={0.3} />
          <Box
            position={[2, 2, 0]}
            color="pink"
            onClick={() => {
              setBox("Box 2");
            }}
          />
          <Box
            position={[-2, 2, 0]}
            onClick={() => {
              setBox("Box 1");
            }}
          />
        </Canvas>
      </div>
      <Drawer variant="permanent" anchor="right">
        <Typography variant="h6" style={{ margin: "50px" }}>
          Position of the box:
        </Typography>
        x-axis: 0 <br /> y-axis: 0 <br /> z-axis: 0
        <Typography variant="h6" style={{ margin: "50px" }}>
          Choose Color:
        </Typography>
        <Button onClick={() => setcolor("brown")}> Brown </Button>
        <Button onClick={() => setcolor("blue")}> Blue </Button>
        <Button onClick={() => setcolor("white")}> White </Button>
      </Drawer>
    </div>
  );
}

export default App;
