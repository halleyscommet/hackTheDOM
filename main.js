let currentLevel = parseInt(
  new URLSearchParams(window.location.search).get("level") || "0"
);

const levelRequirements = {
    0: () => true,
    1: () => true,
    2: () => true,
    3: () => {
        const input = document.getElementById("passwordInput");
        return input && input.value === input.dataset.password;
    }
}

function loadLevel(levelNum) {
  const app = document.getElementById("app");

  if (!levels[levelNum]) {
    app.innerHTML = `<h1>No more levels!</h1>`;
    return;
  }

  const url = new URL(window.location);
  url.searchParams.set("level", levelNum);
  window.history.pushState({}, "", url);

  app.innerHTML = levels[levelNum];

  if (levelRequirements[levelNum]) {
    levelRequirements[levelNum]();
  }

  const nextButton = document.getElementById("next");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (levelRequirements[currentLevel] && !levelRequirements[currentLevel]()) {
        return;
      }
      loadLevel(currentLevel + 1);
      currentLevel++;
    });
  }
}

loadLevel(currentLevel);
