import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: any;
  className?: string;
}

export function Input({ label, error, icon: Icon, className = '', ...props }: any) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-bold text-slate-700">{label}</label>}
      <div className="relative">
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-sans">
            {typeof Icon === 'string' ? Icon : <Icon className="size-5" />}
          </span>
        )}
        <input 
          className={`w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none ${Icon ? 'pl-10' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

export function TextArea({ label, error, className = '', ...props }: any) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-bold text-slate-700">{label}</label>}
      <textarea 
        className={`w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { label: string; value: string }[];
  className?: string;
}

export function Select({ label, error, options, className = '', ...props }: any) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-bold text-slate-700">{label}</label>}
      <select 
        className={`w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none ${className}`}
        {...props}
      >
        {options.map((opt: any) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
