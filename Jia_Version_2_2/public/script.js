let attempts = 5;

function login() {
    const mnsp = document.getElementById('mnsp').value;
    const passcode = document.getElementById('passcode').value;

    // Perform an asynchronous request to your server for authentication
    // Example using Fetch API:
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mnsp, passcode }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'chats.html';
        } else {
            attempts--;
            document.getElementById('error-message').innerText = `Login failed. ${attempts} attempts remaining.`;
            if (attempts === 0) {
                document.getElementById('error-message').innerText = 'Too many attempts. Please wait 30 seconds.';
                document.getElementById('mnsp').disabled = true;
                document.getElementById('passcode').disabled = true;
                setTimeout(() => {
                    document.getElementById('mnsp').disabled = false;
                    document.getElementById('passcode').disabled = false;
                    attempts = 5;
                    document.getElementById('error-message').innerText = '';
                }, 30000);
            }
        }
    })
    .catch(error => console.error('Error:', error));
}
