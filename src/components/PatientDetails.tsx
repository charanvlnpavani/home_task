import PatientContact from "@/pages/PatientContact";
import React from "react";

const PatientDetails = ({
  patientName,
  dob,
  phonenumbers,
}: {
  patientName: string;
  dob: string;
  phonenumbers: {
    number: string;
    label: string;
    flag: React.ReactNode;
    primary?: boolean;
  }[];
}) => {
  console.log("rendering PatientDetails", { patientName, dob, phonenumbers });
  return (
    <>
      <div>
        <h3 className="text-lg font-semibold mt-5">
          {patientName || "Unknown Patient"} - {dob || "Unknown DOB"}
        </h3>
      </div>
      <div>
        <PatientContact phoneNumbers={phonenumbers || []} />
      </div>
    </>
  );
};

export default PatientDetails;
