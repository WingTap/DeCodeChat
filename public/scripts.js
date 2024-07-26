
1.16 KiB

document.addEventListener("DOMContentLoaded", () => {
    const socket = io();
    const messagesDiv = document.getElementById("messages");
    const usernameInput = document.getElementById("username");
    const messageInput = document.getElementById("message");
    function sendMessage() {
        const username = usernameInput.value.trim();
        const message = messageInput.value.trim();
        if (username && message) {
            socket.emit("chat message", { username, message });
            messageInput.value = "";
        } else {
            alert("Please enter both username and message.");
        }
    }
    socket.on("chat message", (msg) => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.innerHTML = `<strong>${msg.username}:</strong> ${msg.message}`;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
    document.querySelector("button").addEventListener("click", sendMessage);
    messageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
