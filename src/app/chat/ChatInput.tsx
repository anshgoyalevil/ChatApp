/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Message } from "@/types/Message";
import { IconSend } from "@tabler/icons-react";
import React, { useState } from "react";

const ChatInput = ({
  setMessages,
  bottomRef,
}: {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  bottomRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [message, setMessage] = useState("");

  const handleMessageSend = async (e: any) => {
    if (!message.trim()) return;
    e?.preventDefault();

    setMessages((prev: Message[]) => [
      ...prev,
      {
        message,
        timestamp: new Date().toLocaleTimeString(),
        sender: "User",
        id: Math.random().toString(36).substr(2, 9),
      },
    ]);

    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    setMessage("");

    bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (reader) {
      let receivedText = "";
      const agentMessageId = Math.random().toString(36).substr(2, 9);
      setMessages((prev: Message[]) => [
        ...prev,
        {
          message: "",
          timestamp: new Date().toLocaleTimeString(),
          sender: "Agent",
          id: agentMessageId,
        },
      ]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        receivedText += decoder.decode(value, { stream: true });
        setMessages((prev: Message[]) => {
          const updatedMessages = prev.map((msg) => {
            if (msg.id === agentMessageId) {
              return {
                ...msg,
                message: receivedText,
              };
            }
            return msg;
          });
          return updatedMessages;
        });
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
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
