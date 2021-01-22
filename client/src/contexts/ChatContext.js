import { useState, createContext } from "react";

const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  const [numberOfConnections, setNumberOfConnections] = useState();

  const values = {
    name,
    setName,
    messages,
    setMessages,
    numberOfConnections,
    setNumberOfConnections,
  };
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export default ChatContext;
