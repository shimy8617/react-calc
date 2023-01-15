import { useContext } from "react";

import { Textfit } from "react-textfit";
import { CalcContext } from "../../context/CalcContext";

import "./Screen.css";

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return <Textfit className="screen">{calc.num ? calc.num : calc.res}</Textfit>;
};

export default Screen;
