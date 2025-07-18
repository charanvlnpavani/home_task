import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface PersonCardProps {
  key: number;
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
  return (
    <Card
      className={`flex flex-row my-5 items-center justify-between p-4 mb-2 cursor-pointer hover:shadow-md rounded-sm${
        notifications ? "border rounded-sm hover:shadow-md" : ""
      }`}
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

        <span className="text-sm text-muted-foreground">DOB: {dob}</span>
      </CardContent>
    </Card>
  );
}
