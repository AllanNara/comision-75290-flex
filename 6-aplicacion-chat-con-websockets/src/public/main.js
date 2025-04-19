const socket = io();

let username = prompt("Ingrese su nombre de usuario");
socket.emit("login", username)

socket.on("new-user", (data) => alert(`${data} se ha conectado.`))

const chatBox = document.querySelector("#chat-box");
const inputMsg = document.querySelector("#input-msg");
const form = document.querySelector("#form");

socket.on("all-msgs", (data) => {
  let messages = "";
  if (data.length) {
    messages = data.reduce((acc, doc) => {
      return acc + `<li>${doc.username} dice: ${doc.message}</li>`;
    }, "");
    messages = `<ul>${messages}</ul>`;
  } else {
    messages = "<p>No existen mensajes, ¡Se el primero!</p>";
  }
  chatBox.innerHTML = `<div>${messages}</div>`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const doc = { message: inputMsg.value, username };
  socket.emit("new-msg", doc);
  inputMsg.value = "";
});
