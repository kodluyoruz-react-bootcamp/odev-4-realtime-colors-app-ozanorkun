import { useEffect, useContext } from "react";
import { initSocket } from "../socketService";
import PageRoute from "../components/PageRoute";
import ChatContext from "../contexts/ChatContext";
import { subscribeToMessage } from "../socketService";

function Container() {
  const { setMessages } = useContext(ChatContext);

  useEffect(() => {
    initSocket();

    subscribeToMessage((message) => {
      setMessages((oldChats) => [...oldChats, message]);
    });

    return () => {};
  }, [setMessages]);

  return (
    <div>
      <PageRoute></PageRoute>
    </div>
  );
}

export default Container;
