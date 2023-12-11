function attachEvents() {

    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const [nameInput, messageInput, sendButton, refreshButton] = document.getElementsByTagName('input');

    const messagesArea = document.getElementById('messages');

    sendButton.addEventListener('click', async () => {

        const messageFormat = {
            author: nameInput.value,
            content: messageInput.value,
        }

        let isValidMessage = nameInput.value !== '' && messageInput.value !== '';

        if (isValidMessage) {
            await fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(messageFormat)
            });
        }

        nameInput.value = '';
        messageInput.value = '';
    });

    refreshButton.addEventListener('click', async () => {

        const response = await fetch(baseUrl);
        const result = await response.json();
        const messages = [];

        for (const msg of Object.values(result)) {
            messages.push(`${msg.author}: ${msg.content}`);
        }

        messagesArea.textContent = messages.join('\n');
    });

}

attachEvents();