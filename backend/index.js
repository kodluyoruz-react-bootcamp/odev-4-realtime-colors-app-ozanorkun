const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile("Hello Socket.io");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("user", (name) => console.log(name));
  socket.on("message", (message) =>
    socket.broadcast.emit("recieve-message", message)
  );

  socket.on("disconnect", () => console.log("user disconnect"));
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
