import React, { useState, useEffect, useRef, useContext } from "react";
import { PatientContext } from "@/context/PatientContext";
import { CheckCheck, Send, Smile } from "lucide-react";
import InputField from "@/components/InputField";
import ButtonIcon from "@/components/ButtonIcon";

type ChatMessageType = {
  id: string;
  text: string;
  sender: "user" | "doctor";
  timestamp: string;
  senderName: string;
};

const ChatMessage = () => {
  const context = useContext(PatientContext);
  const [messages, setMessages] = useState<ChatMessageType[]>(
    context?.chatMessages || []
  );
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(context?.chatMessages || []);
  }, [context]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateMessageId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  const getCurrentTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSendMessage = () => {
    if (inputText.trim() && context) {
      const newMessage: ChatMessageType = {
        id: generateMessageId(),
        text: inputText.trim(),
        sender: "doctor",
        timestamp: getCurrentTimestamp(),
        senderName: "Dr. Smith",
      };

      setMessages((prev) => [...prev, newMessage]);
      setInputText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!context) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Select a patient to view chat messages</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-row ${
              message.sender === "doctor" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="flex flex-col">
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === "doctor"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              <div className="flex items-center justify-between mt-1 text-xs opacity-70">
                <span>{message.senderName}</span>
                <span className="flex flex-row">
                  <CheckCheck className="w-4 h-4 text-green-500" />{" "}
                  {message.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}

        {messages.length > 5 && (
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-red-400"></div>
            <div className="px-3 text-red-500 text-xs font-medium">
              Unread messages
            </div>
            <div className="flex-1 h-px bg-red-400"></div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-2">
          <InputField
            placeholder="Type a message to patient..."
            icon={Smile}
            position="right"
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            value={inputText}
            className="flex-1 px-3 py-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
            iconDisplay={false}
          />
          <ButtonIcon
            variant="outline"
            icon={Send}
            size="lg"
            className="w-10 h-10 bg-gray-500 hover:bg-gray-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
