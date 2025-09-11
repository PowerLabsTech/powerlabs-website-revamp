import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode; // optional icon
  iconPosition?: 'left' | 'right';
  className?: string;
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-semibold';

  const sizeStyles: Record<typeof size, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantStyles: Record<typeof variant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
    outline:
      'border border-gray-300 text-white hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-400',
    amber: 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500',
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2 flex items-center">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2 flex items-center">{icon}</span>
      )}
    </button>
  );
}
