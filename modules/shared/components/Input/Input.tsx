import {  forwardRef, InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
}


export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({label, id, ...props}, ref) => {
    return (
      <div className='flex flex-col gap-1'>
        <label htmlFor={id} className='text-sm text-gray-700'>{label}</label>
          <input 
            ref={ref} 
            id={id} {...props}  
            className='rounded-md border border-gray-400 border-solid px-3 py-2 focus:outline-offset-2 focus:outline-primary focus:outline-3 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'/>
      </div>
    );
  }
)

Input.displayName = 'Input';
