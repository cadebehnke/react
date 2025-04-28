import "./css/MessageList.css";
import { useState } from "react";
import EditMessage from "./EditMessage";
import DeleteMessage from "./DeleteMessage";
import MessageItem from "./MessageItem";

const MessageList = (props) => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

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
          <MessageItem
            key={msg._id}
            name={msg.name}
            age={msg.age}
            state={msg.state}
            review={msg.review}
            message={msg.message}
            img={msg.img}
          />
        ))}
      </ul>
    </section>
  );
};

export default MessageList;
