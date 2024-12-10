import React from "react";
import Sidebar from "@/app/components/Sidebar";

function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex"}>
      <Sidebar />
      <div className={"flex w-full h-screen items-center justify-center"}>
        {children}
      </div>
    </div>
  );
}

export default ChatLayout;
