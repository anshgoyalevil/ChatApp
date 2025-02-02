/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Message } from "@/types/Message";
import { IconSend } from "@tabler/icons-react";
import React, { useState } from "react";

const ChatInput = ({
  setMessages,
}: {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}) => {
  const [message, setMessage] = useState("");

  const handleMessageSend = (e: any) => {
    if (!message.trim()) return;
    e?.preventDefault();

    setMessages((prev: Message[]) => [
      ...prev,
      {
        message,
        timestamp: new Date().toLocaleTimeString(),
        sender: "User",
      },
      {
        message,
        timestamp: new Date().toLocaleTimeString(),
        sender: "Agent",
      },
    ]);
    setMessage("");
  };

  return (
    <form onSubmit={handleMessageSend}>
      <div className="p-4 flex items-center gap-4">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 font-semibold rounded-2xl border-none focus:ring-0 bg-gray-100"
          type="text"
          placeholder="Eg: Generate a sample time series json object"
        />
        <IconSend
          className="text-blue-500 mr-2 cursor-pointer hover:text-blue-600"
          size="30"
          onClick={handleMessageSend}
          type="submit"
        />
      </div>
    </form>
  );
};

export default ChatInput;
