import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Messages.css"; // create this file next

function Messages() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch messages from server
  useEffect(() => {
    axios.get("https://housing-backend-ujyb.onrender.com/api/messages")
      .then(res => setMessages(res.data))
      .catch(err => console.error("Error fetching messages:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResponseMessage("");

    // Client-side validation (must match Joi)
    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters.");
      return;
    }

    try {
      const res = await axios.post("https://housing-backend-ujyb.onrender.com/api/messages", { name });
      setMessages([...messages, res.data.message]);
      setResponseMessage("Message added successfully!");
      setName("");
    } catch (err) {
      setError(err.response?.data || "Something went wrong.");
    }
  };

  return (
    <div className="messages-container">
      <h2>Leave a Message</h2>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter a message"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
        {responseMessage && <p className="success">{responseMessage}</p>}
      </form>

      <h3>All Messages:</h3>
      <ul>
        {messages.map((msg) => (
          <li key={msg._id}>{msg.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
