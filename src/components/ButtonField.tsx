import React from "react";
import { Button } from "./ui/button";

type ButtonFieldProps = {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  color?: string;
  text: string;
  className?: string;
  onClick?: () => void;
};

const ButtonField: React.FC<ButtonFieldProps> = ({
  icon,
  iconPosition,
  color,
  onClick,
  text,
  className,
}) => {
  return (
    <Button
      className={`flex items-center justify-center gap-2 ${className}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </Button>
  );
};

export default ButtonField;
