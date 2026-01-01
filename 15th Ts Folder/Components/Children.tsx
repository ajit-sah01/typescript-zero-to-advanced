import type { PropsWithChildren, ReactNode } from "react";

type CardLayoutProps = PropsWithChildren<{
  title: string;
  footer?: ReactNode;
}>;

export function CardLayout({ title, children, footer }: CardLayoutProps) {
  return (
    <section style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>{title}</h2>
      <div>{children}</div>
      {footer && <footer style={{ marginTop: "1rem" }}>{footer}</footer>}
    </section>
  );
}