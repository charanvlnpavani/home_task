import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Phone, Plus } from "lucide-react";
import ButtonField from "./ButtonField";

type PhoneNumber = {
  number: string;
  label: string;
  flag: React.ReactNode;
  primary?: boolean;
};

type PhoneNumberDropdownProps = {
  phoneNumbers: PhoneNumber[];
  selected: number;
  onSelect: (idx: number) => void;
  onAdd: () => void;
};

export const PhoneNumberDropdown: React.FC<PhoneNumberDropdownProps> = ({
  phoneNumbers,
  selected,
  onSelect,
  onAdd,
}) => {
  return (
    <div className="flex flex-row gap-2 justify-between items-center">
      <Phone className="w-5 h-5 text-muted-foreground" />
      <div className="focus:border rounded-md p-1 w-full  hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black focus:ring-offset-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-evenly gap-2 border rounded-md bg-white cursor-pointer px-1  w-full h-10 border-gray-300">
              <div className="flex items-center gap-2">
                {phoneNumbers[selected].flag}
                <span>{phoneNumbers[selected].number}</span>
              </div>
              <div>
                <ChevronDown className="w-4 h-4 text-muted-foreground " />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60">
            {phoneNumbers.map((phone, idx) => (
              <DropdownMenuItem
                key={phone.number}
                onClick={() => onSelect(idx)}
                className="flex items-center gap-2"
              >
                {selected === idx && (
                  <span className="text-primary mr-1">✓</span>
                )}
                {phone.flag}
                <span>{phone.number}</span>
                <span className="ml-auto text-muted-foreground text-xs">
                  {phone.primary ? "(Primary)" : `(${phone.label})`}
                </span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onAdd} className="text-primary">
              <ButtonField
                icon={<Plus />}
                iconPosition="left"
                text="Add Phone Number"
                className=" rounded-sm font-medium text-sm cursor-pointer text-black w-full"
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
