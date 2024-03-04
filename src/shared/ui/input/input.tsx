import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { InputHTMLAttributes, memo, useId } from "react";
import clsx from "clsx";
import cls from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
}

export const Input = memo((props: InputProps) => {
  const { className, placeholder, type, register, error, ...restProps } = props;

  const id = useId();

  return (
    <div className={clsx(cls.inputWrapper)}>
      <input
        id={id}
        {...register}
        type={type}
        placeholder={placeholder}
        className={clsx(cls.input, {}, [className])}
        {...restProps}
      />
      {error && <p className={cls.error}>{error.message}</p>}
    </div>
  );
});
