import React, { useState } from "react";
import { PhoneNumberDropdown } from "@/components/PhoneNumberDropdown";
import ButtonField from "@/components/ButtonField";
import { Phone } from "lucide-react";

const flagUSA = (
  <span role="img" aria-label="USA">
    🇺🇸
  </span>
);

const phoneNumbers = [
  { number: "(555) 123-4567", label: "Primary", flag: flagUSA, primary: true },
  { number: "(555) 999-0000", label: "Work", flag: flagUSA },
];

const PatientContact = () => {
  const [selected, setSelected] = useState(0);

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
        className="mt-4 w-full rounded-sm font-medium text-sm cursor-pointer w-1/9 text-black border justify-between mx-5 font-bold"
        onClick={() =>
          alert("Patient Phone Number: " + phoneNumbers[selected].number)
        }
      />
    </div>
  );
};

export default PatientContact;
