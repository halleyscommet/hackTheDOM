const levels = {
    0: `
        <h1>Welcome to hackTheDOM!</h1>
        <button
            onclick="window.location.href = '?level=1';"
        >
            Continue to challenge
        </button>
    `,
    1: `
        <h1>Level 1</h1>
        <button
            disabled
            onclick="window.location.href = '?level=2';"
        >
            Click Me
        </button>
    `,
    2: `
        <h1>Level 2</h1>
        <button
            style="display: none;"
            onclick="window.location.href = '?level=3';"
        >
            Click Me
        </button>
    `,
    3: `
        <h1>Level 3</h1>
        <input
            id="passwordInput"
            type="password"
            data-password="correct123"
        >
        <button
            onclick="
                const input = document.getElementById('passwordInput');
                const correctPassword = input.getAttribute('data-password');
                if (input.value === correctPassword) {
                    window.location.href = '?level=4';
                }
            "
        >
            Click Me
        </button>
    `
};