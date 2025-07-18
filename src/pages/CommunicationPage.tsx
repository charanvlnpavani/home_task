import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import ChatBoard from "./ChatBoard";
import personCardData from "@/dataset/personCard";

const CommunicationPage = () => {
  const [selectedPatient, setSelectedPatient] = useState(personCardData[1]);
  return (
    <div className="flex ">
      <div className="w-1/4">
        <LeftSideBar
          personCardData={personCardData}
          onSelectPatient={setSelectedPatient}
        />
      </div>
      <div className="w-4/4 ">
        <ChatBoard patient={selectedPatient} />
      </div>
    </div>
  );
};

export default CommunicationPage;
