import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import cls from "./button.module.scss";

export type ButtonVariant = "primary" | "destructive";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

export const Button = ({
  children,
  className,
  disabled,
  fullWidth,
  variant = "primary",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        cls.button,
        { [cls.disabled]: disabled, [cls.fullWidth]: fullWidth },
        [className, cls[variant]]
      )}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
