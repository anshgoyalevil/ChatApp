"use client";

import React, { useState } from "react";
import SelectModel from "./SelectModel";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { Message } from "@/types/Message";

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col max-h-screen min-h-screen">
      {/* Chat Header */}
      <div className="flex justify-center min-h-20 items-center shadow-md">
        <SelectModel />
      </div>
      {/* Chat Body */}
      <div className="flex-1 overflow-y-auto">
        <Messages messages={messages} />
        <div ref={bottomRef}></div>
      </div>
      {/* Chat Input Box */}
      <div className="shadow-md">
        <ChatInput bottomRef={bottomRef} setMessages={setMessages} />
      </div>
    </div>
  );
};

export default ChatPage;
