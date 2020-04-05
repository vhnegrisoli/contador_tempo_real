const server = require("express")();
const http = require("http").createServer(server);
const io = require("socket.io")(http);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const Log = require("./Log");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

mongoose.connect("mongodb://localhost:27017/socket_io_analytics", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.post("/api/log", async (req, res) => {
  const { usuario, quantidade } = req.body;
  const log = await Log.create({
    usuario,
    quantidade,
  });
  const mensagem = { user: log.usuario, qtd: log.quantidade };
  io.sockets.emit("chat message", mensagem);
  return res.json({ message: "Mensagem emitida: " + JSON.stringify(mensagem) });
});

io.on("connection", function (socket) {
  socket.on("chat message", function (log) {
    io.emit("chat message", log);
  });
});

http.listen(8080);
