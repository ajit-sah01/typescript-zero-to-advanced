import type { List } from "../types";
import { Card } from "./Card";

interface ListsProps {
  items: List[];
}

export default function Lists({ items }: ListsProps) {
  return (
    <div>
      {items.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          price={card.price}
          isSpecial={card.price > 30}
        />
      ))}
    </div>
  );
}
