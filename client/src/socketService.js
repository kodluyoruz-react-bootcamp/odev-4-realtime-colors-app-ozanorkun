import { io } from "socket.io-client";

let socket;

export const initSocket = () => {
  const socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
};
