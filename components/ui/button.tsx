import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] hover:opacity-95",
  secondary:
    "border border-sky-200 bg-white/70 text-sky-900 shadow-sm hover:border-sky-300 hover:bg-sky-50/80",
  ghost:
    "text-sky-900 hover:bg-sky-50/70",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 ${variantClassName[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
