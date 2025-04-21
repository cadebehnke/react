import "./css/Dialog.css";
import React, { useState } from "react";

const EditMessage = (props) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    const updatedMessage = Object.fromEntries(formData.entries());

    // Ensure number fields are treated as numbers (Joi expects this)
    updatedMessage.age = Number(updatedMessage.age);
    updatedMessage.review = Number(updatedMessage.review);

    try {
      const response = await fetch(
        `https://housing-backend-ujyb.onrender.com/api/messages/${props._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedMessage),
        }
      );

      if (response.status === 200) {
        const updatedData = await response.json();
        props.editMessage(updatedData);
        setResult("Message updated successfully!");
        event.target.reset();
        props.closeEditDialog();
      } else {
        const errText = await response.text();
        setResult(`Error: ${errText}`);
      }
    } catch (err) {
      setResult("Network error");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeEditDialog}
          >
            &times;
          </span>
          <form id="edit-message-form" onSubmit={onSubmit}>
            <h3>Edit Message</h3>

            <p>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={props.name}
                required
                minLength="2"
              />
            </p>

            <p>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                defaultValue={props.age}
                min="0"
                max="120"
                required
              />
            </p>

            <p>
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                defaultValue={props.state}
                required
                minLength="2"
              />
            </p>

            <p>
              <label htmlFor="review">Review (0-5):</label>
              <input
                type="number"
                step="0.1"
                id="review"
                name="review"
                defaultValue={props.review}
                min="0"
                max="5"
                required
              />
            </p>

            <p>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                defaultValue={props.message}
                required
                minLength="5"
                maxLength="500"
              />
            </p>

            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMessage;
