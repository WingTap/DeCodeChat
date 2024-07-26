document.addEventListener('DOMContentLoaded', () => {
    const messagesDiv = document.getElementById('messages');
    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message');

    function sendMessage() {
        const username = usernameInput.value.trim();
        const message = messageInput.value.trim();

        if (username && message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = `${username}: ${message}`;
            messagesDiv.appendChild(messageElement);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;

            // Clear the message input after sending
            messageInput.value = '';
        }
    }

    // Attach event listener to button
    document.querySelector('button').addEventListener('click', sendMessage);

    // Optional: Allow sending message by pressing Enter key
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
