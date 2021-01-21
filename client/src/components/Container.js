import { useEffect } from "react";
import { initSocket } from "../socketService";

function Container() {
  useEffect(() => {
    initSocket();
    return () => {};
  }, []);

  return <div></div>;
}

export default Container;
