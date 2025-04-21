import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteMessage = (props) => {
  const [result, setResult] = useState("");

  const deleteMessage = async () => {
    const response = await fetch(
      `https://housing-backend-ujyb.onrender.com/api/messages/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Message deleted successfully");
      props.closeDeleteDialog();
      props.hideMessage();
    } else {
      setResult("Sorry, we couldn't delete your message right now.");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDeleteDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the message from {props.name}?</h3>
            <section>
              <button onClick={props.closeDeleteDialog}>No</button>
              <button onClick={deleteMessage}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMessage;
