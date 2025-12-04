const levels = {
  0: `
        <h1>Welcome to hackTheDOM!</h1>
        <button
            id="next"
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
            id="next"
            style="display: none;"
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
            id="next"
        >
            Click Me
        </button>
    `,
  4: `
    `,
};
