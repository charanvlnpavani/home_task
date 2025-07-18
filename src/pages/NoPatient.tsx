import ButtonField from "@/components/ButtonField";
import { Card } from "@/components/ui/card";
import { Plus, User } from "lucide-react";
import React from "react";

const NoPatient = () => {
  return (
    <Card className="p-5">
      <div className="flex flex-col items-center justify-center h-full">
        <User width={50} height={50} className="text-gray-500" />
        <h2 className="text-lg font-semibold mt-4">No Patients Found</h2>
        <p className="text-gray-500 mt-2">
          Try adjusting your search criteria or filters to find patients
        </p>
        <ButtonField
          icon={<Plus />}
          iconPosition="left"
          color="#1a1a1a"
          text="Add Patient"
          className="mt-4 rounded-sm font-medium text-sm cursor-pointer "
        />
      </div>
    </Card>
  );
};

export default NoPatient;
