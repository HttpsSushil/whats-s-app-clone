document.getElementById('sendButton').addEventListener('click', function() {
    var inputField = document.getElementById('messageInput');
    var chatsDiv = document.getElementById('chats');
    var message = inputField.value;

    if (message.trim() !== "") {
        // Create a new chat bubble
        var chatBubble = document.createElement('div');
        chatBubble.className = 'chat-bubble';
        chatBubble.textContent = message;

        // Optionally add a class for user messages
        chatBubble.classList.add('user');

        // Append the chat bubble to the chats div
        chatsDiv.appendChild(chatBubble);

        // Scroll to the bottom of the chats div
        chatsDiv.scrollTop = chatsDiv.scrollHeight;

        // Clear the input field after sending the message
        inputField.value = '';
    }
});
