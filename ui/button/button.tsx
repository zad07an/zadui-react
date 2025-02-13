import type { ButtonProps } from "./button.types";

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className="" {...props}>
      {children}
    </button>
  );
};
