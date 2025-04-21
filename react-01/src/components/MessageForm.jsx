import React, { useState } from "react";
import axios from "axios";
import "./css/MessageForm.css";

const MessageForm = ({ updateMessages }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    state: "",
    review: ""
  });
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setResult("Sending...");

    // Client‐side validation (mirrors Joi):
    if (formData.name.trim().length < 2) {
      setError("Name must be at least 2 characters"); return;
    }
    const ageNum = Number(formData.age);
    if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
      setError("Age must be between 0 and 120"); return;
    }
    if (formData.state.trim().length < 2) {
      setError("State must be at least 2 characters"); return;
    }
    const reviewNum = Number(formData.review);
    if (isNaN(reviewNum) || reviewNum < 0 || reviewNum > 5) {
      setError("Review must be between 0 and 5"); return;
    }

    try {
      const res = await axios.post(
        "https://housing-backend-ujyb.onrender.com/api/messages",
        {
          name: formData.name.trim(),
          age: ageNum,
          state: formData.state.trim(),
          review: reviewNum
        }
      );
      updateMessages(res.data);
      setResult("Message added!");
      setFormData({ name: "", age: "", state: "", review: "" });
    } catch (err) {
      setError(err.response?.data || "Error adding message");
    }
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <p>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </p>

      <p>
        <label>Age:</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Your age"
          required
          min="0"
          max="120"
        />
      </p>

      <p>
        <label>State:</label>
        <input
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Your state (e.g. TX)"
          required
        />
      </p>

      <p>
        <label>Review (0–5):</label>
        <input
          name="review"
          type="number"
          step="0.1"
          value={formData.review}
          onChange={handleChange}
          placeholder="Your rating"
          required
          min="0"
          max="5"
        />
      </p>

      <p>
        <button type="submit">Submit</button>
      </p>

      {result && <p className="result">{result}</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default MessageForm;