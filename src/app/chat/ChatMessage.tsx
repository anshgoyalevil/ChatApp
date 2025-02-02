import { Message } from "@/types/Message";
import Image from "next/image";
import React from "react";

const ChatMessage = ({
  message = "How may I help you?vvvvvvvvvvv vvvvvv vvvvvvvvvvv vvvvvvvv vvvvvvvv vvvvvvvvvvvvv",
  timestamp = "End of world",
  sender = "Agent",
}: Message) => {
  return (
    <div
      className={`flex gap-2 py-3 px-3 ${
        sender === "Agent" ? "justify-start" : "justify-end"
      }`}
    >
      {sender === "Agent" ? (
        <div className="flex justify-center">
          <Image
            src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${
              sender === "Agent" ? "Kingston" : "Sophia"
            }`}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full overflow-hidden"
          />
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col items-end">
        <div
          className={`${
            sender === "Agent" ? "bg-[#EEEEEE]" : "bg-[#4B70F5]"
          } max-w-[600px] text-wrap py-2 px-4 ${
            sender === "Agent" ? "text-gray-700" : "text-white"
          } ${
            sender === "Agent" ? "rounded-tr-2xl" : "rounded-tl-2xl"
          }  rounded-bl-2xl rounded-br-2xl font-medium shadow-md`}
        >
          {message}
        </div>
        <div className="text-sm font-light py-1 px-2">{timestamp}</div>
      </div>
      {sender === "User" ? (
        <div className="flex justify-center">
          <Image
            src={`https://api.dicebear.com/9.x/adventurer/svg?seed=Kingston`}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full overflow-hidden"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChatMessage;
