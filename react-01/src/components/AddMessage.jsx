import "./css/Dialog.css";
import { useState } from "react";

const AddMessage = (props) => {
  const [result, setResult] = useState("");

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    const response = await fetch("https://housing-backend-ujyb.onrender.com/api/messages", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      const data = await response.json();
      setResult("Message added successfully!");
      event.target.reset();
      props.closeAddDialog();
      props.updateMessages(data);
    } else {
      setResult("Error adding message.");
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeAddDialog}
          >
            &times;
          </span>

          <form id="add-message-form" onSubmit={addToServer}>
            <h3>Leave a Message</h3>

            {/* Name */}
            <p>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required minLength="2" />
            </p>

            {/* Age */}
            <p>
              <label htmlFor="age">Age:</label>
              <input type="number" id="age" name="age" required min="0" max="120" />
            </p>

            {/* State */}
            <p>
              <label htmlFor="state">State:</label>
              <input type="text" id="state" name="state" required minLength="2" />
            </p>

            {/* Review */}
            <p>
              <label htmlFor="review">Review (0–5):</label>
              <input type="number" id="review" name="review" required min="0" max="5" step="0.1" />
            </p>

            {/* Message */}
            <p>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required minLength="5" maxLength="500" />
            </p>

            {/* Image Upload */}
            <p>
              <label htmlFor="img">Upload Image:</label>
              <input type="file" id="img" name="img" accept="image/*" />
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

export default AddMessage;
