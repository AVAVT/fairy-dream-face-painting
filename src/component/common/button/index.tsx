import { forwardRef } from "react";
import { Spinner } from "@/component/common/spinner";
import { cn } from "@/lib/utils";
import type { ButtonColors, ButtonProps, ButtonVariants } from "./type";

const buttonVariantStyle = (
  variant: ButtonVariants,
  color: ButtonColors,
): string => {
  switch (color) {
    case "tertiary":
      return cn(
        "border-tertiary",
        variant === "outline"
          ? "bg-background text-tertiary"
          : "bg-tertiary text-background",
      );
    case "foreground":
      return cn(
        "border-foreground",
        variant === "outline"
          ? "bg-background text-foreground"
          : "bg-foreground text-background",
      );
    case "background":
      return cn(
        "border-background",
        variant === "outline"
          ? "bg-foreground text-background"
          : "bg-background text-foreground",
      );
    case "secondary":
      return cn(
        "border-secondary",
        variant === "outline"
          ? "bg-background text-secondary"
          : "bg-secondary text-background",
      );
    default:
      return cn(
        "border-primary",
        variant === "outline"
          ? "bg-background text-primary"
          : "bg-primary text-background",
      );
  }
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      color = "primary",
      className,
      children,
      disabled = false,
      loading = false,
      type = "button",
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "rounded-sm px-4 py-1 border-2 border-solid focus:outline-0 inline-flex items-center gap-2 font-bold",
        "disabled:opacity-70 disabled:cursor-not-allowed leading-1.2",
        buttonVariantStyle(variant, color),
        loading
          ? ""
          : "cursor-pointer duration-200 hover:shadow-sm hover:-translate-y-[1px] active:duration-0 active:translate-y-0 active:shadow-none",
        className,
      )}
      disabled={loading || disabled}
      {...props}
    >
      {children}{" "}
      {loading && (
        <Spinner
          size={3}
          gap={0.5}
          color={variant === "outline" ? color : "background"}
        />
      )}
    </button>
  ),
);
