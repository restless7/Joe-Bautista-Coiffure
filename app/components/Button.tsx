import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-800 active:bg-neutral-900',
    secondary: 'bg-transparent border border-neutral-300 text-neutral-900 hover:border-neutral-900 hover:bg-neutral-50',
    minimal: 'bg-transparent text-neutral-900 hover:text-neutral-600 underline underline-offset-4 hover:no-underline'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
