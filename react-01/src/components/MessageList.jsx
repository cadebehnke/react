import "./css/MessageList.css";
import { useState } from "react";
import EditMessage from "./EditMessage";
import DeleteMessage from "./DeleteMessage";

const MessageList = (props) => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(props.messages);

  const openEditDialog = (msg) => {
    setSelectedMessage(msg);
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
    setSelectedMessage(null);
  };

  const openDeleteDialog = (msg) => {
    setSelectedMessage(msg);
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
    setSelectedMessage(null);
  };

  const hideMessage = () => {
    props.removeMessage(selectedMessage._id);
    setSelectedMessage(null);
  };

  const editMessage = (updatedMsg) => {
    props.replaceMessage(updatedMsg);
    setSelectedMessage(null);
  };

  return (
    <section id="message-list" className="columns">
      {showEditDialog && selectedMessage && (
        <EditMessage
          _id={selectedMessage._id}
          name={selectedMessage.name}
          age={selectedMessage.age}
          state={selectedMessage.state}
          review={selectedMessage.review}
          msg={selectedMessage.message}
          closeEditDialog={closeEditDialog}
          editMessage={editMessage}
        />
      )}

      {showDeleteDialog && selectedMessage && (
        <DeleteMessage
          _id={selectedMessage._id}
          name={selectedMessage.name}
          closeDeleteDialog={closeDeleteDialog}
          hideMessage={hideMessage}
        />
      )}

      <ul>
        {props.messages.map((msg) => (
          <li key={msg._id} className="message-box">
            <strong>{msg.name}</strong> ({msg.age}, {msg.state}) — ⭐ {msg.review}/5
            <p>{msg.message}</p>
            <div className="icon-buttons">
              <button onClick={() => openEditDialog(msg)} title="Edit">
                &#9998;
              </button>
              <button onClick={() => openDeleteDialog(msg)} title="Delete">
                &#128465;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MessageList;
