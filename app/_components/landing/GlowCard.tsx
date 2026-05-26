import type { HTMLAttributes } from "react";

type GlowCardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div";
};

export function GlowCard({
  as: Component = "article",
  children,
  className,
  ...props
}: GlowCardProps) {
  const classes = className ? `card-surface ${className}` : "card-surface";

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
