import { useContext } from "react";

import "./Button.css";
import { CalcContext } from "../../context/CalcContext";

const addStyle = (btn) => {
  const className = {
    "/": "operator",
    "*": "operator",
    "-": "operator",
    "+": "operator",
    "=": "equals",
    AC: "reset",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  function handleReset(e) {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  }

  function handleClick() {
    const numberToString = value.toString();

    let NumValue;
    if (numberToString === "0" && calc.num === 0) {
      NumValue = "0";
    } else {
      NumValue = Number(calc.num + numberToString);
    }

    setCalc({
      ...calc,
      num: NumValue,
    });
  }

  function handleComma() {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  }

  function handleOperator() {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  }

  function handleResult() {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "*": (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        nun: 0,
      });
    }
  }

  function handlePercentage() {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
    });
  }

  function handleInver() {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res - 1 : 0,
      sign: "",
    });
  }

  const handleClickBtn = () => {
    const results = {
      ".": handleComma,
      AC: handleReset,
      "=": handleResult,
      "/": handleOperator,
      "*": handleOperator,
      "-": handleOperator,
      "+": handleOperator,
      "%": handlePercentage,
      "+-": handleInver,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClick();
    }
  };

  return (
    <button onClick={handleClickBtn} className={`${addStyle(value)} button`}>
      {value}
    </button>
  );
};

export default Button;
