import React from "react";

interface PersonCard {
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
}

const personCardData: PersonCard[] = [
  {
    name: "John Doe",
    dob: "01/01/1990",
    notifications: 5,
    href: "https://example.com/johndoe",
    phoneNumbers: [
      { number: "(555) 123-4567", label: "Primary", flag: "🇺🇸", primary: true },
      { number: "(555) 999-0000", label: "Work", flag: "🇺🇸" },
    ],
  },
  {
    name: "Jane Smith",
    dob: "02/02/1992",
    notifications: 2,
    href: "https://example.com/janesmith",
    phoneNumbers: [
      { number: "(555) 234-5678", label: "Primary", flag: "🇺🇸", primary: true },
      { number: "(555) 888-0000", label: "Mobile", flag: "🇺🇸" },
    ],
  },
  {
    name: "Alice Johnson",
    dob: "03/03/1993",
    notifications: 0,
    href: "https://example.com/alicejohnson",
    phoneNumbers: [
      { number: "(555) 345-6789", label: "Primary", flag: "🇺🇸", primary: true },
      { number: "(555) 777-0000", label: "Home", flag: "🇺🇸" },
    ],
  },
  {
    name: "Bob Brown",
    dob: "04/04/1994",
    notifications: 0,
    href: "https://example.com/bobbrown",
    phoneNumbers: [
      { number: "(555) 456-7890", label: "Primary", flag: "🇺🇸", primary: true },
      { number: "(555) 888-0000", label: "Work", flag: "🇺🇸" },
    ],
  },
];
export default personCardData;
