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
  chatMessages?: {
    id: string;
    text: string;
    sender: "doctor" | "user";
    timestamp: string;
    senderName: string;
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
    chatMessages: [
      {
        id: "1",
        text: "Hello, how can I assist you today?",
        sender: "doctor",
        timestamp: "10:00 AM",
        senderName: "Dr. Smith",
      },
      {
        id: "2",
        text: "I have a question about my recent test results.",
        sender: "user",
        timestamp: "10:05 AM",
        senderName: "John Doe",
      },
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
    chatMessages: [
      {
        id: "1",
        text: "Hi Jane, your appointment is confirmed for tomorrow at 3 PM.",
        sender: "doctor",
        timestamp: "09:00 AM",
        senderName: "Dr. Brown",
      },
      {
        id: "2",
        text: "Thank you! I'll be there.",
        sender: "user",
        timestamp: "09:05 AM",
        senderName: "Jane Smith",
      },
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
    chatMessages: [
      {
        id: "1",
        text: "Alice, your lab results are ready. Please check your portal.",
        sender: "doctor",
        timestamp: "08:30 AM",
        senderName: "Dr. Lee",
      },
      {
        id: "2",
        text: "Thank you for the update!",
        sender: "user",
        timestamp: "08:35 AM",
        senderName: "Alice Johnson",
      },
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
    chatMessages: [
      {
        id: "1",
        text: "Bob, your follow-up appointment is scheduled for next week.",
        sender: "doctor",
        timestamp: "07:00 AM",
        senderName: "Dr. Green",
      },
      {
        id: "2",
        text: "Got it, thank you!",
        sender: "user",
        timestamp: "07:05 AM",
        senderName: "Bob Brown",
      },
    ],
  },
];
export default personCardData;

export const addNewMessage = (
  text: string,
  sender: "doctor" | "user",
  senderName: string
): {
  id: string;
  text: string;
  sender: "doctor" | "user";
  timestamp: string;
  senderName: string;
} => {
  const now = new Date();
  const timestamp = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return {
    id: Date.now().toString(),
    text,
    sender,
    timestamp,
    senderName,
  };
};

export const simulateDoctorResponse = (): {
  id: string;
  text: string;
  sender: "doctor" | "user";
  timestamp: string;
  senderName: string;
} => {
  const responses = [
    "Thank you for your message. I'll get back to you shortly.",
    "I understand your concern. Let me review your case.",
    "That's a great question. I'll need to check with our specialist.",
    "I'll make sure to address this during your next appointment.",
    "Please continue to monitor your symptoms and keep me updated.",
  ];

  const randomResponse =
    responses[Math.floor(Math.random() * responses.length)];
  return addNewMessage(randomResponse, "doctor", "Dr. Smith");
};
