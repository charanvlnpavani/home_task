import ButtonField from "@/components/ButtonField";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";

const NoPatient = ({
  title,
  description,
  logo,
  className,
  buttonName,
}: {
  title: string;
  description: string;
  logo: React.ElementType;
  className?: string;
  buttonName?: string;
}) => {
  return (
    <Card className="p-5">
      <div
        className={`flex flex-col items-center justify-center h-full ${className}`}
      >
        {React.createElement(logo, {
          width: 50,
          height: 50,
          className: "text-gray-500",
        })}
        <h2 className="text-lg font-semibold text-gray-700 mt-4">{title}</h2>
        <p className="text-gray-500 mt-2">{description}</p>
        <ButtonField
          icon={<Plus />}
          iconPosition="left"
          color="#1a1a1a"
          text={buttonName || "New Message"}
          className="mt-4 rounded-sm font-medium text-sm cursor-pointer "
        />
      </div>
    </Card>
  );
};

export default NoPatient;
