import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <p>Cups Orders {count}</p>
      <button onClick={() => setCount(count + 1)}>Order one more</button>
    </>
  );
}
