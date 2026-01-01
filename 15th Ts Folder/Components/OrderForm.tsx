import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState("Masala");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, cups });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Chai name
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </label>

      <label>
        Cups
        <input
          type="number"
          min={1}
          value={cups}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCups(Number(e.target.value))
          }
        />
      </label>

      <button type="submit">Order</button>
    </form>
  );
}
