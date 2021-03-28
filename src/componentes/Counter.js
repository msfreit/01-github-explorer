import { useState } from "react";

    // imutabilidade - eu crio um novo espaço na memoria ao invés de alterar o valor da variável que ja existe.

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
