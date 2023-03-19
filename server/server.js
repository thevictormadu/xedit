const io = require("socket.io")(3002, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send-changes", (delta) => {
    socket.broadcast.emit("received-changes", delta);
  });
  
});
