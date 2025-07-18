import PatientDetails from "@/components/PatientDetails";
import React from "react";
import InputField from "@/components/InputField";
import { Search } from "lucide-react";

type Patient = {
  name: string;
  dob: string;
  phonenumbers: {
    number: string;
    label: string;
    flag: React.ReactNode;
    primary?: boolean;
  }[];
  href: string;
};

type ChatBoardProps = {
  patient: Patient | null;
};

const ChatBoard: React.FC<ChatBoardProps> = ({ patient }) => {
  if (!patient) return null;
  return (
    <>
      <div className="px-4 pb-2">
        <PatientDetails
          patientName={patient.name}
          dob={patient.dob}
          phonenumbers={patient.phoneNumbers}
        />
      </div>
      <hr />
      <div className="px-4 py-2">
        <InputField
          placeholder="Type a message..."
          icon={Search}
          position="left"
          onChange={() => {}}
          iconDisplay={false}
          className="w-full "
        />
      </div>
      <hr className="py-2" />
    </>
  );
};

export default ChatBoard;
