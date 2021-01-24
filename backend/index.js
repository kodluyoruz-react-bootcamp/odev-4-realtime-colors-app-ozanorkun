const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const Messages = require("./libs/Messages");

let numberOfConnections = -1;

app.get("/", (req, res) => {
  res.sendFile("Hello Socket.io");
});

io.on("connection", (socket) => {
  //console.log("a user connected");
  numberOfConnections++;
  io.emit("number-of-connections", numberOfConnections);

  Messages.list((data) => io.emit("message-list", data));

  socket.on("user", (name) => {
    socket.broadcast.emit("name", name);
  });

  socket.on("message", (messagePackage) => {
    socket.broadcast.emit("recieve-message", messagePackage);
    Messages.upsert(messagePackage);
  });

  socket.on("color", (color) => socket.broadcast.emit("get-color", color));

  socket.on("disconnect", () => {
    //console.log("user disconnect");
    numberOfConnections--;
    io.emit("number-of-connections", numberOfConnections);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
