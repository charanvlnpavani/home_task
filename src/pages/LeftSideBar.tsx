import React, { useState } from "react";
import { Plus, SearchIcon } from "lucide-react";
import ButtonField from "@/components/ButtonField";
import InputField from "@/components/InputField";
import { PersonCard } from "@/components/PersonCard";
import NoPatient from "./NoPatient";

type PersonCardData = {
  name: string;
  dob: string;
  notifications: number;
  href: string;
};

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
          />
          <ButtonField
            icon={<Plus />}
            iconPosition="left"
            color="#1a1a1a"
            text="New Message"
            className="mt-4 w-full rounded-sm font-medium text-sm cursor-pointer"
          />
        </div>
        <div className="h-[calc(82vh-1px)] overflow-y-auto">
          {filteredPersons.length === 0 ? (
            <div className="text-center text-gray-500 mt-4">
              <NoPatient />
            </div>
          ) : (
            filteredPersons.map((person, index) => (
              <>
                <PersonCard
                  key={index}
                  name={person.name}
                  dob={person.dob}
                  notifications={person.notifications}
                  href={person.href}
                  onClick={() => onSelectPatient(person)}
                />
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
