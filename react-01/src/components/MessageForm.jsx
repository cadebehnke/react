import React, { useState } from "react";
import axios from "axios";
import "./css/MessageForm.css";

export default function MessageForm({ updateMessages }) {
  const [fd, setFd] = useState({
    name:    "",
    age:     "",
    state:   "",
    review:  "",
    message: ""
  });
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFd((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult("Sending...");

    // Client‐side validation
    if (fd.name.trim().length < 2) {
      setError("Name must be at least 2 characters.");
      return;
    }
    const ageNum = Number(fd.age);
    if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
      setError("Age must be between 0 and 120.");
      return;
    }
    if (fd.state.trim().length < 2) {
      setError("State must be at least 2 characters.");
      return;
    }
    const reviewNum = Number(fd.review);
    if (isNaN(reviewNum) || reviewNum < 0 || reviewNum > 5) {
      setError("Review must be between 0 and 5.");
      return;
    }
    if (fd.message.trim().length < 5) {
      setError("Message must be at least 5 characters.");
      return;
    }

    try {
      const res = await axios.post(
        "https://housing-backend-ujyb.onrender.com/api/messages",
        {
          name:    fd.name.trim(),
          age:     ageNum,
          state:   fd.state.trim(),
          review:  reviewNum,
          message: fd.message.trim()
        }
      );
      updateMessages(res.data);
      setResult("Message added!");
      setFd({ name: "", age: "", state: "", review: "", message: "" });
    } catch (err) {
      setError(err.response?.data || "Error adding message");
    }
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <p>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={fd.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            minLength={2}
          />
        </label>
      </p>
      <p>
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={fd.age}
            onChange={handleChange}
            placeholder="Your age"
            required
            min="0"
            max="120"
          />
        </label>
      </p>
      <p>
        <label>
          State:
          <input
            name="state"
            type="text"
            value={fd.state}
            onChange={handleChange}
            placeholder="Your state (e.g. TX)"
            required
            minLength={2}
          />
        </label>
      </p>
      <p>
        <label>
          Review (0–5):
          <input
            name="review"
            type="number"
            step="0.1"
            value={fd.review}
            onChange={handleChange}
            placeholder="Your rating"
            required
            min="0"
            max="5"
          />
        </label>
      </p>
      <p>
        <label>
          Message:
          <textarea
            name="message"
            value={fd.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            minLength={5}
            maxLength={500}
          />
        </label>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
      {result && <p className="result">{result}</p>}
      {error  && <p className="error">{error}</p>}
    </form>
  );
}
