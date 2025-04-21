import React from "react";
import MessageItem from "./MessageItem";
import "./css/MessageList.css";

const MessageList = ({ messages }) => (
  <ul className="message-list">
    {messages.map(msg => (
      <MessageItem
        key={msg._id}
        name={msg.name}
        age={msg.age}
        state={msg.state}
        review={msg.review}
      />
    ))}
  </ul>
);

export default MessageList;
