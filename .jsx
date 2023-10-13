import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function ChatRoom() {
  return (
    <div className="chat-room">
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default ChatRoom;


import React from 'react';

function MessageList() {
  
  return (
    <div className="message-list">
      {/* Render messages here */}
    </div>
  );
}

export default MessageList;


import React, { useState } from 'react';

function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
  
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default MessageInput;


