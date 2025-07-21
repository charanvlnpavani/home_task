import React, { useState } from "react";
import { Plus, SearchIcon, User } from "lucide-react";
import ButtonField from "@/components/ButtonField";
import InputField from "@/components/InputField";
import { PersonCard } from "@/components/PersonCard";
import NoPatient from "./NoPatient";
import type { PersonCardData } from "@/context/PatientContext";

type LeftSideBarProps = {
  personCardData: PersonCardData[];
  onSelectPatient: (person: PersonCardData) => void;
};

const LeftSideBar: React.FC<LeftSideBarProps> = ({
  personCardData,
  onSelectPatient,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPersons = personCardData.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-100  p-4 shadow-sm">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Communication</h2>
        </div>
        <div className="w-full flex flex-col">
          <InputField
            placeholder="Search patients..."
            icon={SearchIcon}
            position="left"
            onChange={(e) => setSearchTerm(e.target.value)}
            iconDisplay={true}
          />
          <ButtonField
            icon={<Plus />}
            iconPosition="left"
            color="#1a1a1a"
            text="New Message"
            className="mt-4 w-full rounded-sm font-medium text-sm cursor-pointer  "
          />
        </div>
        <hr className="my-4" />
        <div className="h-[calc(82vh-1px)] overflow-y-auto">
          {filteredPersons.length === 0 ? (
            <div className="text-center text-gray-500 mt-4">
              <NoPatient
                title="No Patient Found"
                description="Please add a patient to start chatting."
                logo={User}
                buttonName="Add Patient"
              />
            </div>
          ) : (
            filteredPersons.map((person, index) => (
              <div key={index}>
                <PersonCard
                  name={person.name}
                  dob={person.dob}
                  notifications={person.notifications}
                  href={person.href}
                  onClick={() => onSelectPatient(person)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
