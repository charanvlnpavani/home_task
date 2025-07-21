import React, { useState } from "react";
import { PhoneNumberDropdown } from "@/components/PhoneNumberDropdown";
import ButtonField from "@/components/ButtonField";
import { Phone } from "lucide-react";

interface PhoneNumber {
  number: string;
  label: string;
  flag: React.ReactNode;
  primary?: boolean;
}

interface PatientContactProps {
  phoneNumbers: PhoneNumber[];
}

const PatientContact: React.FC<PatientContactProps> = ({ phoneNumbers }) => {
  const [selected, setSelected] = useState(0);
  if (!phoneNumbers || phoneNumbers.length === 0) {
    return (
      <div className="w-full justify-between flex flex-row ">
        <div className="text-gray-500">No phone numbers available</div>
        <ButtonField
          icon={<Phone />}
          iconPosition="left"
          text="Call Patient"
          color="white"
          className="mt-4  rounded-sm  text-sm cursor-not-allowed w-1/9 text-gray-400 border justify-between mx-5 font-bold opacity-50"
          onClick={() => alert("No phone number available")}
        />
      </div>
    );
  }

  return (
    <div className="w-full justify-between flex flex-row ">
      <PhoneNumberDropdown
        phoneNumbers={phoneNumbers}
        selected={selected}
        onSelect={setSelected}
        onAdd={() => alert("Add Phone Number")}
      />
      <ButtonField
        icon={<Phone />}
        iconPosition="left"
        text="Call Patient"
        color="white"
        className="mt-4  rounded-sm  text-sm cursor-pointer w-1/9 text-black border justify-between mx-5 font-bold hover:shadow-md"
        onClick={() =>
          alert("Patient Phone Number: " + phoneNumbers[selected].number)
        }
      />
    </div>
  );
};

export default PatientContact;
