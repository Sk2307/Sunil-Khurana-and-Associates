import React, { PropsWithChildren } from 'react';

export interface CardProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true, ...props }: any) {
  return (
    <div 
      className={`bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  items?: string[];
  footer?: React.ReactNode;
  accentColor?: string;
}

export function ServiceCard({ icon: Icon, title, description, items, footer, accentColor = 'blue' }: ServiceCardProps) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 text-primary group-hover:bg-primary',
    amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600',
    purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600',
  };

  return (
    <Card className="group">
      <div className={`size-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${colorMap[accentColor] || colorMap.blue} group-hover:text-white`}>
        <Icon className="size-8" />
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600 mb-6 leading-relaxed text-sm">{description}</p>
      {items && (
        <ul className="space-y-2 mb-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
              <span className="size-1.5 rounded-full bg-green-500" /> {item}
            </li>
          ))}
        </ul>
      )}
      {footer}
    </Card>
  );
}
