import React, { useEffect, useState } from "react";
import { getMessages, deleteMessage } from "../api";
import { useNavigate } from "react-router-dom";

function MessageList() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    loadMessages();
  }, []);
  const loadMessages = async () => {
    try {
      const Mres = await getMessages();
      setMessages(Mres.data);
    } catch (error) {
      console.error("Error Loading Messages", error);
    }
  };
  const MsgDelete = async (id) => {
    if (confirm("Are you sure want to delete this message?")) {
      try {
        await deleteMessage(id);
        loadMessages();
      } catch (error) {
        console.error("Error Deleting Message", error);
      }
    }
  };
}
export default MessageList;
