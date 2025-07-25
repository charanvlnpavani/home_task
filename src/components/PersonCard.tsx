import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useContext } from "react";
import { PatientContext } from "@/context/PatientContext";

interface PersonCardProps {
  name: string;
  dob: string;
  notifications?: number;
  onClick?: () => void;
  href?: string;
}

export function PersonCard({
  name,
  dob,
  notifications,
  onClick,
  href,
}: PersonCardProps) {
  const context = useContext(PatientContext);
  const isSelected = context?.name === name;

  return (
    <Card
      className={`flex flex-row my-2 items-center justify-between py-4  w-90 mx-auto cursor-pointer hover:shadow-md rounded-sm${
        notifications ? "border rounded-sm hover:shadow-md" : ""
      } ${isSelected ? "ring-1 ring-gray-300 bg-gray-100" : ""}`}
      onClick={onClick}
    >
      <CardContent className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-sm hover:underline">{name}</h4>
            {href && (
              <a href={href} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="text-muted-foreground" />
              </a>
            )}
          </div>
          <div>
            {notifications ? (
              <Badge className="rounded-full  hover:bg-red-800 hover:text-red-100 bg-red-100 text-red-800 p-3 text-sm font-bold size-2">
                {notifications}
              </Badge>
            ) : null}
          </div>
        </div>

        <span className="text-xs text-muted-foreground">DOB: {dob}</span>
      </CardContent>
    </Card>
  );
}
