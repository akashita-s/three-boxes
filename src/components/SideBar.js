import React from "react";
import { Typography, Drawer, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/color";

const SideBar = () => {
  const currentBox = useSelector((state) => state.box.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Drawer variant="permanent" anchor="right">
        <Typography variant="h6" style={{ margin: "50px" }}>
          Position of the {currentBox}:
        </Typography>
        x-axis: 0 <br /> y-axis: 0 <br /> z-axis: 0
        <Typography variant="h6" style={{ margin: "50px" }}>
          Choose Color:
        </Typography>
        <Button onClick={() => dispatch(changeColor("brown"))}> Brown </Button>
        <Button onClick={() => dispatch(changeColor("blue"))}> Blue </Button>
        <Button onClick={() => dispatch(changeColor("white"))}> White </Button>
      </Drawer>
    </div>
  );
};

export default SideBar;
