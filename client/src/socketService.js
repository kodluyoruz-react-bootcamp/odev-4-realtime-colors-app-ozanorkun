import io from "socket.io-client";

let socket;

export const initSocket = () => {
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("Connected"));
};

export const sendMessage = (message) => {
  socket && socket.emit("message", message);
};

export const sendName = (name) => {
  socket && socket.emit("user", name);
};

export const subscribeToMessage = (cb) => {
  if (!socket) return true;

  socket.on("recieve-message", (message) => {
    cb(message);
  });
};
