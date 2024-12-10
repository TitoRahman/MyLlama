"use client";

import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { FiSend } from "react-icons/fi";

interface ChatTextInputProps {
  onEnter: (message: string) => void; // Function to handle message submission
}

const ChatTextInput: React.FC<ChatTextInputProps> = ({ onEnter }) => {
  const [message, setMessage] = useState<string>("");

  // Automatically resize the textarea
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height dynamically
    setMessage(textarea.value); // Update message state
  };

  // Handle Enter key
  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent newline
      if (message.trim()) {
        onEnter(message.trim()); // Trigger callback with trimmed message
        setMessage(""); // Clear input
        const textarea = event.target as HTMLTextAreaElement;
        textarea.style.height = "auto"; // Reset height
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex w-1/2 bg-neutral-800 p-4 gap-2 rounded items-end">
        <textarea
          id="chatInput"
          className="flex-1 bg-neutral-800 text-white rounded resize-none focus:outline-none focus:ring-none"
          rows={1}
          placeholder="Type your message..."
          value={message}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button
          className={" w-fit h-fit text-neutral-700 bg-white p-2 rounded-full"}
        >
          <FiSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatTextInput;
