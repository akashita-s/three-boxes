import React, {useState} from "react";
import { Typography, Drawer, Button } from "@material-ui/core";

const SideBar = () => {

  const [color, setcolor] = useState('brown')

  return (
    <div>
      <Drawer variant="permanent" anchor="right">
        <Typography variant="h6" style={{ margin: "50px" }}>
          Position of the box:
        </Typography>
        x-axis: 0 <br /> y-axis: 0 <br /> z-axis: 0
        <Typography variant="h6" style={{ margin: "50px" }}>
          Choose Color:
        </Typography>
        <Button onClick={() => setcolor('brown')}> Brown </Button>
        <Button onClick={() => setcolor('blue')}> Blue </Button>
        <Button onClick={() => setcolor('white')}> White </Button>
      </Drawer>
    </div>
  );
};

export default SideBar;
