import React from "react";
import { Button } from "./ui/button";

type ButtonIconProps = {
  icon: React.ComponentType<{ className?: string }>;
  size?: "default" | "sm" | "lg" | null | undefined;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  [key: string]: unknown;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon: Icon,
  size,
  variant,
  ...props
}) => {
  return (
    <div>
      <Button variant={variant} size={size} {...props}>
        <Icon
          className={`w-${size} h-${size} ${
            variant === "outline" ? "text-gray-500" : "text-white"
          }`}
        />
      </Button>
    </div>
  );
};

export default ButtonIcon;
