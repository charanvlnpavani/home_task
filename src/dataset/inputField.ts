import { Search } from "lucide-react";
interface InputField {
  id: number;
  placeholder: string;
  icon: React.ElementType;
  position: "left" | "right";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const inputField: InputField[] = [
  {
    id: 1,
    placeholder: "Search patients...",
    icon: Search,
    position: "left",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
  },
];
