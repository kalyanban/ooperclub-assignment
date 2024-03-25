import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react'; // Example emoji picker library

import "./index.css"

const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  };

  const handleEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className='input-box'
      />
      <button className='emoji-button' onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😀</button>
      {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
      <button className='send-button' onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
