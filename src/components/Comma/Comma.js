import { useState } from "react";

export default function Equals() {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  function handleComma(e) {
    if (e.target.value === ".") {
      setCalc({
        ...calc,
        num: 29,
      });
    }
  }

  return (
    <button value="." name="." onClick={handleComma}>
      .
    </button>
  );
}
