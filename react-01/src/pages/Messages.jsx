import "./css/Messages.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MessageList from "../components/MessageList";
import AddMessage from "../components/AddMessage";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://housing-backend-ujyb.onrender.com/api/messages"
      );
      setMessages(response.data);
    })();
  }, []);

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  const updateMessages = (msg) => {
    setMessages((msgs) => [...msgs, msg]);
  };

  const replaceMessage = (updatedMsg) => {
    setMessages((msgs) =>
      msgs.map((m) => (m._id === updatedMsg._id ? updatedMsg : m))
    );
  };

  const removeMessage = (id) => {
    setMessages((msgs) => msgs.filter((m) => m._id !== id));
  };

  return (
    <main className="messages-page">
      <button id="add-message-btn" onClick={openAddDialog}>
        +
      </button>

      {showAddDialog ? (
        <AddMessage
          closeAddDialog={closeAddDialog}
          updateMessages={updateMessages}
        />
      ) : (
        ""
      )}

      <MessageList
        messages={messages}
        replaceMessage={replaceMessage}
        removeMessage={removeMessage}
      />
    </main>
  );
};

export default Messages;
