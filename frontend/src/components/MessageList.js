import React from 'react';
import UserAvatar from './UserAvatar';

function MessageList({ messages, users }) {
  return (
    <ul className="message-list space-y-4">
      {messages.map((message) => {
        const user = users.find(user => user.id === message.userId);
        const isUser = message.userId === 'user1';
        return (
          <li key={message.id} className={`message-item flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && <UserAvatar user={user} />}
            <div className={`message-content bg-gray-800 p-3 rounded-lg ${isUser ? 'rounded-br-none' : 'rounded-bl-none'}`}>
              <div className="message-header flex justify-between items-center mb-1">
                <strong className="text-xs text-gray-400">{user.username}</strong> 
                <span className="text-xs text-gray-500">
                  {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                </span>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
            {isUser && <UserAvatar user={user} />}
          </li>
        );
      })}
    </ul>
  );
}

export default MessageList;