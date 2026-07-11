import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700",
    secondary:
      "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
    outline:
      "border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white",
    ghost:
      "text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center cursor-pointer rounded-xl h-11 px-5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}