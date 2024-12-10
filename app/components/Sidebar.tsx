"use client";

import React from "react";
import { TbDoorExit } from "react-icons/tb";
import { FiSearch, FiFilePlus, FiSidebar } from "react-icons/fi";
import { SiOllama } from "react-icons/si";
import { redirect } from "next/navigation";

type ChatItem = {
  chatID: string;
  chatTitle: string;
};
const iconSize = 20;

function Sidebar() {
  const chatList = generateDummyChatList(20);

  function generateDummyChatList(n: number) {
    let chatList: ChatItem[] = [];
    for (let i = 0; i < n; i++) {
      chatList.push({
        chatID: i.toString(),
        chatTitle: `Chat ${i}`,
      });
    }
    return chatList;
  }
  function handleChatClick(chatID: string) {
    redirect(`/chat/${chatID}`);
  }
  return (
    <div
      className={
        "bg-neutral-900 text-white h-screen w-1/6 flex flex-col justify-between"
      }
    >
      {/*Header*/}
      <div className="p-4 flex items-center gap-2">
        <div className={"p-2 bg-neutral-800 text-white rounded-full"}>
          <SiOllama size={iconSize} />
        </div>
        <p>MyLlama - Ollama Demo App</p>
      </div>
      {/*MENU*/}
      <div className="p-4 flex justify-between">
        {/*CLOSE SIDE BAR*/}
        <div className="">
          <button className={"hover:bg-neutral-800 p-2 rounded"}>
            <FiSidebar size={iconSize} />
          </button>
        </div>
        <div className="">
          {/*SEARCH*/}
          <button className={"hover:bg-neutral-800 p-2 rounded"}>
            <FiSearch size={iconSize} />
          </button>
          {/*NEW CHAT*/}
          <button className={"hover:bg-neutral-800 p-2 rounded"}>
            <FiFilePlus size={iconSize} />
          </button>
        </div>
      </div>
      {/*CHAT LIST*/}
      <div
        className="
          flex-1 overflow-scroll overflow-x-hidden scroll-smooth flex flex-col
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        {chatList.map((chat: ChatItem) => (
          <div
            key={chat.chatID}
            className={"rounded cursor-pointer hover:bg-neutral-800 p-2 mx-2"}
            onClick={() => handleChatClick(chat.chatID)}
          >
            <p>{chat.chatTitle}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between w-full p-6 rounded">
        <p>Username</p>
        <button className={"hover:bg-neutral-800 p-2 rounded"}>
          <TbDoorExit size={iconSize} />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
