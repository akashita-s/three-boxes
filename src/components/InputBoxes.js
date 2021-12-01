import React from "react";
import { useDispatch } from "react-redux";
import { changeInput, changeInputTwo ,changeInputThree, changeInputFour, changeInputFive, changeInputSix} from "../features/inputdata";
import { useSelector } from "react-redux";

const InputBoxes = () => {
  const dispatch = useDispatch();
  const currentBox = useSelector((state) => state.box.value);
  const input = useSelector((state) => state.input.value);

  if (currentBox === "Box 2")
  return (
    <div style={{marginLeft: '80px', width: '30px'}}>
      <form >
        <input type='number' value={input.x1} onChange={(e) => dispatch(changeInput(e.currentTarget.value))} ></input>
        <input type='number' value={input.y1} onChange={(e) => dispatch(changeInputTwo(e.currentTarget.value))} />
        <input type='number' value={input.z1} onChange={(e) => dispatch(changeInputThree(e.currentTarget.value))} />
      </form>
    </div>
  );
  else
  return (
    <div style={{marginLeft: '80px', width: '30px'}}>
      <form >
        <input type='number' value={input.x2} onChange={(e) => dispatch(changeInputFour(e.currentTarget.value))} ></input>
        <input type='number' value={input.y2} onChange={(e) => dispatch(changeInputFive(e.currentTarget.value))} />
        <input type='number' value={input.z2} onChange={(e) => dispatch(changeInputSix(e.currentTarget.value))} />
      </form>
    </div>
  );
};

export default InputBoxes;
