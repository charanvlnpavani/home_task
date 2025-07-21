import { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import ChatBoard from "./ChatBoard";
import personCardData from "@/dataset/personCard";
import { PatientContext } from "@/context/PatientContext";
import type { PersonCardData } from "@/context/PatientContext";
import NoPatient from "./NoPatient";
import { MessageSquare } from "lucide-react";

const CommunicationPage = () => {
  const [selectedPatient, setSelectedPatient] = useState<PersonCardData | null>(
    null
  );

  return (
    <>
      <PatientContext.Provider value={selectedPatient}>
        <div className="flex h-screen">
          <div className="w-1/4 h-full overflow-y-auto">
            <LeftSideBar
              personCardData={personCardData}
              onSelectPatient={setSelectedPatient}
            />
          </div>
          <div className="w-3/4 h-full">
            {selectedPatient ? (
              <ChatBoard />
            ) : (
              <div className="flex items-center justify-center align-middle h-full w-full">
                <NoPatient
                  title="No Patient Selected"
                  description="Select a patient from the list to view their communication history and send messages."
                  logo={MessageSquare}
                  className="text-muted-foreground w-[400px] h-[400px] text-center"
                />
              </div>
            )}
          </div>
        </div>
      </PatientContext.Provider>
    </>
  );
};

export default CommunicationPage;
