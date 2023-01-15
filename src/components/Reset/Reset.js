import { useState } from "react";

export default function Reset() {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  // User click AC
  function handleReset(e) {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  }

  return (
    <button value="0" name="ac" onClick={handleReset}>
      AC
    </button>
  );
}
