interface CardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function Card(props: CardProps) {
  const { name, price, isSpecial = false } = props;

  return (
    <article>
      <h2>
        {name} {isSpecial && <span>⭐</span>}
      </h2>
      <p>₹{price}</p>
    </article>
  );
}
