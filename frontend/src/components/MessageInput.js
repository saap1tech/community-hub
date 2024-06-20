import React from 'react';
import { AiOutlineSend } from 'react-icons/ai'; 

function MessageInput({ value, onChange, sendMessage }) {
  return (
    <div className="message-input-container flex">
      <input 
        type="text"
        placeholder="Type your message..." 
        value={value}
        onChange={onChange}
        className="flex-grow bg-gray-800 p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac]" 
      />
      <button onClick={sendMessage} className="bg-[#38b2ac] p-3 rounded-r-lg hover:bg-[#2d928d]"> 
        <AiOutlineSend className="text-white" /> 
      </button>
    </div>
  );
}

export default MessageInput;
