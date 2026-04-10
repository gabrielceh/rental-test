import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type TitleColor = 'primary' | 'secondary' | 'light';
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleBrandProps {
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
  size?: TitleSize;
  color?: TitleColor;
}

export function Title({
  children,
  className,
  size = 'md',
  color = 'secondary',
  as: Component = 'h2',
}: TitleBrandProps) {
  return (
    <Component
      className={twMerge(
        clsx(
          'font-semibold',
          sizeClasses[size],
          titleColorClasses[color],
          className,
        ),
      )}
    >
      {children}
    </Component>
  );
}

const sizeClasses = {
  sm: 'text-sm md:text-sm',
  md: 'text-sm md:text-base',
  lg: 'text-base md:text-lg',
  xl: 'text-lg md:text-xl',
  '2xl': 'text-xl md:text-2xl',
  '3xl': 'text-2xl md:text-3xl',
};

const titleColorClasses = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  light: 'text-gray-400',
};
