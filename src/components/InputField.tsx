import React from "react";
import { Input } from "./ui/input";
import ButtonIcon from "./ButtonIcon";
import { Funnel } from "lucide-react";
interface InputFieldProps {
  placeholder: string;
  icon: React.ElementType;
  position: "left" | "right";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iconDisplay?: boolean;
  className?: string;
  value?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const InputField: React.FC<InputFieldProps> = (item) => {
  return (
    <>
      {item.iconDisplay ? (
        <div className="w-full flex  gap-3 justify-between items-center ">
          <div
            className={`w-full h-8 flex items-center rounded-sm border border-gray-300 bg-white mt-2 px-2 ${item.className}`}
          >
            {item.position === "left" ? (
              <>
                <item.icon className="text-gray-500 mr-2 w-5 h-5" />

                <Input
                  className={`border-none shadow-none focus-visible:ring-0 p-0 h-10 text-gray-900 placeholder:text-gray-400 ${item.className}`}
                  placeholder={item.placeholder}
                  onChange={item.onChange}
                  value={item.value}
                  onKeyPress={item.onKeyPress}
                  onClick={item.onClick}
                />
              </>
            ) : (
              <>
                <Input
                  className={`border-none shadow-none focus-visible:ring-0 p-0 h-10 text-gray-900 placeholder:text-gray-400 ${item.className}`}
                  placeholder={item.placeholder}
                  onChange={item.onChange}
                  value={item.value}
                  onKeyPress={item.onKeyPress}
                  onClick={item.onClick}
                />
                <item.icon className="ml-2 w-5 h-5 text-black" />
              </>
            )}
          </div>
          <div className="mt-2">
            <ButtonIcon
              variant="outline"
              icon={Funnel}
              size="lg"
              className="p-3 rounded-sm h-8 cursor-pointer hover:bg-gray-500"
            />
          </div>
        </div>
      ) : (
        <div className="w-full flex  gap-3 justify-between items-center ">
          <div
            className={`w-full h-8 flex items-center rounded-sm border border-gray-300 bg-white mt-2 px-2 ${item.className}`}
          >
            {item.position === "left" ? (
              <>
                <item.icon className="text-gray-500 mr-2 w-5 h-5" />

                <Input
                  className={`border-none shadow-none focus-visible:ring-0 p-0 h-10 text-gray-900 placeholder:text-gray-400 ${item.className}`}
                  placeholder={item.placeholder}
                  onChange={item.onChange}
                />
              </>
            ) : (
              <>
                <Input
                  className={`border-none shadow-none focus-visible:ring-0 p-0 h-10 text-gray-900 placeholder:text-gray-400 ${item.className}`}
                  placeholder={item.placeholder}
                  onChange={item.onChange}
                />
                <item.icon className="ml-2 w-5 h-5 text-black" />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InputField;
