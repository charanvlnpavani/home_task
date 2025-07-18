import React from "react";
import { Button } from "./ui/button";

type ButtonFieldProps = {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  color?: string;
  text: string;
  className?: string;
};

const ButtonField: React.FC<ButtonFieldProps> = ({
  icon,
  iconPosition = "left",
  color = "#1a1a1a",
  text,
  className,
}) => {
  return (
    <Button
      className={`flex items-center justify-center gap-2 ${className}`}
      style={{ backgroundColor: color }}
    >
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </Button>
  );
};

export default ButtonField;
