import { clsx, type ClassValue } from 'clsx';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { twMerge } from 'tailwind-merge'; // Standard for 2025: npm install tailwind-merge clsx
import SvgSpinier from './SvgSpinier';

// Helper for cleaner class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CustomButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingColor?: string;
  loadingSpinnerSize?: string | number;
}

const Button: FC<CustomButtonProps> = ({
  isLoading = false,
  loadingColor = "#ffffff", // Added default
  loadingSpinnerSize = 24,   // Changed default to 24px for standard buttons
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={cn(
        "flex items-center justify-center transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:active:scale-100",
        isLoading ? "cursor-wait" : "cursor-pointer",
        className
      )}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <SvgSpinier 
            style={{ width: loadingSpinnerSize, height: loadingSpinnerSize }} 
            fill={loadingColor} 
          />
          {/* Optional: Add "Loading..." text for screen readers */}
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
