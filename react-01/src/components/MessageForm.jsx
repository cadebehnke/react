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
    setError("");
    setResult("Sending...");

    const { name, age, state, review } = formData;
    if (name.trim().length < 2) return setError("Name ≥ 2 chars");
    if (age < 0 || age > 120) return setError("Age 0–120");
    if (state.trim().length < 2) return setError("State ≥ 2 chars");
    if (review < 0 || review > 5) return setError("Review 0–5");

    try {
      const res = await axios.post(
        "https://housing-backend-ujyb.onrender.com/api/messages",
        {
          name,
          age: Number(age),
          state,
          review: Number(review)
        }
      );

      if (res.status === 200) {
        setResult("Message added!");
        updateMessages(res.data);      
        setFormData({ name: "", age: "", state: "", review: "" });
      } else {
        setError("Error adding message");
      }
    } catch (err) {
      setError(err.response?.data || "Server error");
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
          required
          minLength={2}
        />
      </p>
      <p>
        <label>Age:</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
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
          required
          minLength={2}
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
          required
          min="0"
          max="5"
        />
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
      <p className="result">{result}</p>
      <p className="error">{error}</p>
    </form>
  );
};

export default MessageForm;
