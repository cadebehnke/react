import React from "react";
import "./css/MessageList.css";

export default function MessageList({ messages }) {
  return (
    <ul className="message-list">
      {messages.map((msg) => (
        <li key={msg._id}>
          <p>
            <strong>{msg.name}</strong> ({msg.age}, {msg.state}) – Rating:{" "}
            {msg.review}/5
          </p>
          <p>{msg.message}</p>
        </li>
      ))}
    </ul>
  );
}
