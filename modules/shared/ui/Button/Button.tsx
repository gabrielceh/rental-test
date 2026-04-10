import clsx from 'clsx';
import {  ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariants = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: ButtonVariants;
}


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({variant = "primary", ...props}, ref) => {

    return (
      <button
        ref={ref}
        {...props}
        className={clsx(
          variantColoir(variant),
          'rounded-md px-3 py-2 md:text-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 transition-all',
          props.className,
        )}
      />
    );
  }
)

Button.displayName = 'Button';

const variantColoir = (variant: ButtonVariants) => {
  const variants = {
    "primary": 'bg-primary text-white hover:bg-primary-hover',
    "secondary": 'bg-secondary text-white hover:bg-secondary-hover',
  };

  return variants[variant] ?? variants["primary"];
} 
