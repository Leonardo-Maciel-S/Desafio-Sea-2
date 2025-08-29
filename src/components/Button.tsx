import type { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "border px-10 py-2 rounded-xl cursor-pointer",
  variants: {
    type: {
      primary: "border-blue-default text-blue-default",
      secondary: "border-medium-gray text-medium-gray",
    },
    flex: {
      true: "flex-1",
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  styleType?: "primary" | "secondary";
  flex?: boolean;
  buttonClassName?: string;
}

export const Button = ({
  flex,
  styleType,
  children,
  buttonClassName,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={button({ flex, type: styleType, class: buttonClassName })}
    >
      {children}
    </button>
  );
};
