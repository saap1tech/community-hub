import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { v4 as uuidv4 } from 'uuid'; 
import { users } from '../data/example';

function ChatRoom({ currentUser, messages = [] }) { 
  const [messagesInRoom, setMessagesInRoom] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const { roomId } = useParams();

  useEffect(() => {
    const filteredMessages = messages.filter(
      (message) => message.roomId === roomId
    );
    setMessagesInRoom(filteredMessages);
  }, [roomId, messages]); 

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messagesInRoom]); 

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessageObject = {
        id: uuidv4(), 
        userId: currentUser.id, 
        roomId: roomId,
        content: newMessage,
        timestamp: new Date().toISOString(),
      };

      setMessagesInRoom([...messagesInRoom, newMessageObject]);
      setNewMessage(''); 

    }
  };

  return (
    <div className="flex flex-col h-full p-4">
      <div className="message-list-container flex-grow overflow-y-auto mb-4">
        <MessageList messages={messagesInRoom} users={users} />
        <div ref={messagesEndRef} /> 
      </div>
      <MessageInput 
        value={newMessage} 
        onChange={handleMessageChange} 
        sendMessage={sendMessage} 
      />
    </div>
  );
}

export default ChatRoom;