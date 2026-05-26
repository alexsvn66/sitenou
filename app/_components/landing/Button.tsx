import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "link";

const buttonClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  link: "btn-link",
};

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = className
    ? `${buttonClasses[variant]} ${className}`
    : buttonClasses[variant];

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
