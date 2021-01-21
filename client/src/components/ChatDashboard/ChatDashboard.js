import ChatMessage from "../ChatMessage/ChatMessage";
import { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import styles from "./index.module.css";

function ChatDashboard() {
  const { messages } = useContext(ChatContext);
  return (
    <div>
      {messages.map((item, key) => (
        <ChatMessage key={key} message={item.message} name={item.name} />
      ))}
    </div>
  );
}

export default ChatDashboard;
