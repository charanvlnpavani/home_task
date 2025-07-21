import { createContext } from "react";

export type PersonCardData = {
  name: string;
  dob: string;
  notifications: number;
  href: string;
  phoneNumbers?: {
    number: string;
    label: string;
    flag: React.ReactNode;
    primary?: boolean;
  }[];
  chatMessages?: {
    id: string;
    text: string;
    sender: "user" | "doctor";
    timestamp: string;
    senderName: string;
  }[];
};

export const PatientContext = createContext<PersonCardData | null>(null);
