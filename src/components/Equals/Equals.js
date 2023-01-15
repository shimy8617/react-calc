import { useState } from "react";

export default function Equals() {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  // User click Equals
  function handleResult() {
    if (calc.res && calc.num) {
      console.log(calc.res);
      console.log(calc.num);
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

  return (
    <button value="=" name="=" onClick={handleResult}>
      =
    </button>
  );
}
