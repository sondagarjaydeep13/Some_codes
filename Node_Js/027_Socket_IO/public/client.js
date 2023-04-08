const socket = io();
var names;
do {
  names = prompt("Enter your name...");
} while (names == "");
let textarea = document.querySelector("#textarea");
let messageArea = document.querySelector(".message_area");
//let names=prompt("Enter your name...")

textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMessage(e.target.value);
  }
});

function sendMessage(msg) {
  var msg = {
    user: names,
    message: msg,
  };
  appendMessage(msg, "outgoing");

  textarea.value = "";

  socket.emit("message", msg);
}

function appendMessage(msg, type) {
  let mainDiv = document.createElement("div");
  let className = type;
  mainDiv.classList.add(className, "message");

  let markup = `
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
`;
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
}

//receive
socket.on("message", (msg) => {
  console.log(msg);
  appendMessage(msg, "incomming");
});
