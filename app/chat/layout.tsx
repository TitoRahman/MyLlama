"use client";

import React from "react";
import Sidebar from "@/app/components/Sidebar";
import ChatTextInput from "@/app/components/ChatTextInput";

function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  function handleEnter(message: string) {
    console.log(message);
  }
  return (
    <div className={"flex"}>
      <Sidebar />
      <div className="flex flex-col w-full h-screen p-8">
        <div className={"flex-1"}>{children}</div>
        <ChatTextInput onEnter={handleEnter} />
      </div>
    </div>
  );
}

export default ChatLayout;
