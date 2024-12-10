import React from "react";
type Chat = {
  role: "user" | "llama";
  message: string;
};
function Page({ params }: { params: { id: string } }) {
  let chat = generateRandomChat(20);
  function generateRandomChat(n: number): Chat[] {
    let chat: Chat[] = [];
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        chat.push({
          role: "user",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        });
      } else {
        chat.push({
          role: "llama",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.",
        });
      }
    }
    return chat;
  }
  return (
    <div className={"w-full flex flex-col items-center"}>
      <div className="w-1/2">
        {chat.map((message, index) => (
          <div
            key={index}
            className={`p-2 flex flex-col gap-2 ${message.role === "user" ? "items-end" : "items-start"}`}
          >
            <div className={"font-bold"}>
              {message.role === "user" ? "" : "Llama"}
            </div>
            <div
              className={`rounded w-3/4 ${message.role === "user" ? "bg-neutral-700 p-2" : ""}`}
            >
              {message.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
