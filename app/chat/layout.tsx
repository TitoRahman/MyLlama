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
      <div className="flex flex-col w-full h-screen py-4">
        <div
          className={
            "flex-1 overflow-scroll overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          }
        >
          {children}
        </div>
        <ChatTextInput onEnter={handleEnter} />
      </div>
    </div>
  );
}

export default ChatLayout;
