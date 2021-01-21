import React from "react";
import styles from "./index.module.css";

function ChatMessage({ message, name }) {
  return (
    <div>
      {name}: {message}
    </div>
  );
}

export default ChatMessage;
