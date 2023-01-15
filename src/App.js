import "./App.css";

import Wrapper from "./components/Wrapper/Wrapper";
import Screen from "./components/Screen/Screen";
import ButtonWrapper from "./components/ButtonWrapper/ButtonWrapper";
import Button from "./components/Button/Button";
import CalcProvider from "./context/CalcContext";

export default function App() {
  const buttonValue = [
    ["AC", "+-", "%", "/"],
    [9, 8, 7, "*"],
    [6, 5, 4, "-"],
    [3, 2, 1, "+"],
    [0, ".", "="],
  ];

  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonWrapper>
          {buttonValue.flat().map((btn, index) => (
            <Button value={btn} key={index} />
          ))}
        </ButtonWrapper>
      </Wrapper>
    </CalcProvider>
  );
}
