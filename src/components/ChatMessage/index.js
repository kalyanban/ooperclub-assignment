import React from 'react';

import "./index.css"

const ChatMessage = ({ message, likeMessage }) => {
  return (
    <div className="message">
      <span className='messages'>{message.user}: {message.text}</span>
      <button className='like-button' onClick={() => likeMessage(message.id)}>Like ({message.likes})</button>
    </div>
  );
};

export default ChatMessage;
