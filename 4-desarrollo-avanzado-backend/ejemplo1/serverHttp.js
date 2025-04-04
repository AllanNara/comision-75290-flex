import http from "http";

const server = http.createServer((request, response) => {
  response.end("Mi servidor desde node nativo!");
});

server.listen(8080, () => {
  console.log("El servidor esta escuchando en el puerto 8080");
});
