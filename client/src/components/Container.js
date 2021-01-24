import { useEffect, useContext } from "react";
import {
  initSocket,
  getColor,
  subscribeToMessage,
  subscribeInitialMessages,
  numberOfConnections,
} from "../socketService";
import PageRoute from "../components/PageRoute";
import ChatContext from "../contexts/ChatContext";

function Container() {
  const { setMessages, setNumberOfConnections, setColor } = useContext(
    ChatContext
  );

  useEffect(() => {
    initSocket();

    subscribeToMessage((message) => {
      setMessages((oldChats) => [...oldChats, message]);
    });

    subscribeInitialMessages((data) => {
      setMessages(data);
    });

    numberOfConnections((numberOfConnections) => {
      setNumberOfConnections(numberOfConnections);
    });

    getColor((color) => {
      setColor(color);
    });

    return () => {};
  }, [setMessages, setNumberOfConnections, setColor]);

  return (
    <div>
      <PageRoute></PageRoute>
    </div>
  );
}

export default Container;
