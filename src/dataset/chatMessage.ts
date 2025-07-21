export type ChatMessage = {
  id: string;
  text: string;
  sender: "doctor" | "user";
  timestamp: string;
  senderName: string;
};

export const chatMessages: ChatMessage[] = [];

export const addNewMessage = (
  text: string,
  sender: "doctor" | "user",
  senderName: string
): ChatMessage => {
  return {
    id: Date.now().toString(),
    text,
    sender,
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    senderName,
  };
};

export const simulateDoctorMessage = (): ChatMessage => {
  return addNewMessage(
    "Message sent to patient successfully.",
    "doctor",
    "Dr. Smith"
  );
};
