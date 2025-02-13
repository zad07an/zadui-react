import type { ButtonProps } from "./button.types";

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 rounded-md bg-background text-foreground"
      {...props}
    >
      {children}
    </button>
  );
};
