import React, { PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: any;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  icon: Icon,
  ...props 
}: any) {
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20',
    secondary: 'bg-slate-900 hover:bg-slate-800 text-white',
    outline: 'bg-transparent border border-slate-200 text-slate-900 hover:bg-slate-50',
    ghost: 'bg-transparent text-slate-600 hover:text-primary hover:bg-slate-50',
    white: 'bg-white text-primary hover:bg-slate-50 shadow-lg',
  };

  const sizes = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-11 px-6 text-sm',
    lg: 'h-13 px-8 text-base',
  };

  return (
    <button 
      className={`inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="size-4" />}
    </button>
  );
}
