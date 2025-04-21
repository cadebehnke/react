import React from "react";
import "./css/MessageItem.css";

const MessageItem = ({ name, age, state, review }) => (
  <li className="message-item">
    <strong>{name}</strong> ({age}, {state}) — ⭐ {review}/5
  </li>
);

export default MessageItem;
