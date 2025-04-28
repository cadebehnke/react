import React from "react";
import "./css/MessageItem.css";

const MessageItem = ({ name, age, state, review, message, img }) => (
  <li className="message-item">
    <strong>{name}</strong> ({age}, {state}) — ⭐ {review}/5
    <p>{message}</p>
    {img && <img src={`https://housing-backend-ujyb.onrender.com/${img}`} alt="Uploaded" style={{ maxWidth: "200px", marginTop: "10px" }} />}
  </li>
);

export default MessageItem;
