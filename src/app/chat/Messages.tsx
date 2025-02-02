"use client";

import React from "react";
import ChatMessage from "./ChatMessage";
import { Message } from "@/types/Message";

type MessagesProps = {
  messages: Message[];
};

const Messages = ({ messages }: MessagesProps) => {
  const messagesComponents = messages.map((message, index) => (
    <ChatMessage
      key={index}
      message={message.message}
      timestamp={message.timestamp}
      sender={message.sender}
    />
  ));

  return <div>{messagesComponents}</div>;
};

export default Messages;
