import "./App.css";
import { AppBar, Typography, Toolbar, Drawer } from "@material-ui/core";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";

function App() {
  const Box = (props) => {
    return (
      <mesh {...props}>
        <boxGeometry />
        <meshNormalMaterial color="blue" />
      </mesh>
    );
  };

  const [box, setBox] = useState("Box 1");
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
        <Canvas>
          <Box
            position={[2, 2, 0]}
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
     
    </div>
  );
}

export default App;
