import React, { useState } from 'react';

import ChatInput from './components/ChatInputs';
import ChatMessage from './components/ChatMessage';
import Header from "./components/Header"

import "./App.css"

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      id: messages.length + 1,
      user: randomUser,
      text: text,
      likes: 0
    };
    setMessages([...messages, newMessage]);
  };

  const likeMessage = (id) => {
    const updatedMessages = messages.map(message =>
      message.id === id ? { ...message, likes: message.likes + 1 } : message
    );
    setMessages(updatedMessages);
  };

  return (
    <div className="app">
      <Header />
      <div className="chat-thread">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} likeMessage={likeMessage} />
        ))}
      </div>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default App;
