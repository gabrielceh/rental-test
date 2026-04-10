import clsx from 'clsx';
import {  ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  icon: ReactNode;
}


export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({icon, ...props}, ref) => {

    return (
      <button 
        ref={ref}
        {...props} 
        className={
          clsx(
            'rounded-md p-1 md:text-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 transition-all'
          )
        }
      >{icon}</button>  
    );
  }
)

IconButton.displayName = 'IconButton';

