import PatientDetails from "@/components/PatientDetails";
import React, { useContext } from "react";
import ChatMessage from "./ChatMessage";
import { PatientContext } from "@/context/PatientContext";

const ChatBoard: React.FC = () => {
  const context = useContext(PatientContext);

  if (!context) return null;

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 px-4 pb-2">
        <PatientDetails
          patientName={context.name}
          dob={context.dob}
          phonenumbers={context.phoneNumbers || []}
        />
      </div>
      <hr />
      <div className="flex-1 min-h-0">
        <ChatMessage />
      </div>
    </div>
  );
};

export default ChatBoard;
