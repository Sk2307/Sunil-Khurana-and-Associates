import React from 'react';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  centered = false, 
  light = false,
  className = '',
  ...props
}: any) {
  return (
    <div 
      className={`flex flex-col gap-4 ${centered ? 'items-center text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}
      {...props}
    >
      {subtitle && (
        <span className={`font-bold text-sm tracking-widest uppercase ${light ? 'text-gold' : 'text-primary'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-black leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-slate-400' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
