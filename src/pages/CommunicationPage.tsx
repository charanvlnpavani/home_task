import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import ChatBoard from "./ChatBoard";
import personCardData from "@/dataset/personCard";

const CommunicationPage = () => {
  const [selectedPatient, setSelectedPatient] = useState(personCardData[0]);

  return (
    <div className="flex ">
      <div className="w-1/3">
        <LeftSideBar
          personCardData={personCardData}
          onSelectPatient={setSelectedPatient}
        />
      </div>
      <div className="w-3/3">
        <ChatBoard patient={selectedPatient} />
      </div>
    </div>
  );
};

export default CommunicationPage;
