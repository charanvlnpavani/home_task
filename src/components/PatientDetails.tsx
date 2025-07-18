import React from "react";

const PatientDetails = ({
  patientName,
  dob,
}: {
  patientName: string;
  dob: string;
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold my-5">
        {patientName} - {dob}
      </h3>
    </div>
  );
};

export default PatientDetails;
