import { useState, createContext } from "react";

const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [name, setName] = useState("");

  const values = {
    name,
    setName,
  };
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export default ChatContext;
