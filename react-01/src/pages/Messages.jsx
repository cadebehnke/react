import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";
import "./css/Messages.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("https://housing-backend-ujyb.onrender.com/api/messages")
      .then(res => setMessages(res.data))
      .catch(err => console.error("Error fetching messages:", err));
  }, []);

  const updateMessages = (newMsg) => {
    setMessages(msgs => [...msgs, newMsg]);
  };

  return (
    <div className="messages-page">
      <h2>Leave a Message</h2>
      <MessageForm updateMessages={updateMessages} />
      <h3>All Messages</h3>
      <MessageList messages={messages} />
    </div>
  );
};

export default Messages;
