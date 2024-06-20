import React from "react";
import { Link } from "react-router-dom";
import { messages } from "../data/example";

function ChatList({ currentUser }) {
  const availableRooms = Array.from(
    new Set(messages.map((message) => message.roomId))
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Your Chats</h1>
      <ul>
        {availableRooms.map((roomId) => (
          <li key={roomId} className="mb-4">
            <Link
              to={`/chat/${roomId}`}
              className="bg-gray-800 p-4 rounded-lg shadow-lg block hover:bg-gray-700"
            >
              <h2 className="text-xl font-bold">Room: {roomId}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
