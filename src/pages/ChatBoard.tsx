import PatientDetails from "@/components/PatientDetails";
import React from "react";
import PatientContact from "./PatientContact";

type Patient = {
  name: string;
  dob: string;
};

type ChatBoardProps = {
  patient: Patient | null;
};

const ChatBoard: React.FC<ChatBoardProps> = ({ patient }) => {
  if (!patient) return null;
  return (
    <div>
      <PatientDetails patientName={patient.name} dob={patient.dob} />
      <PatientContact />
    </div>
  );
};

export default ChatBoard;
