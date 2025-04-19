const messages = [];

export default (io) => {
  io.on("connection", (socket) => {
    console.log("Un nuevo cliente se ha conectado");
    console.log("ID del cliente: ", socket.id);

    socket.emit("all-msgs", messages);

    socket.on("new-msg", (data) => {
      messages.unshift(data);
      io.emit("all-msgs", messages);
    });

    socket.on("login", (data) => {
      socket.broadcast.emit("new-user", data);
    });
  });
};
