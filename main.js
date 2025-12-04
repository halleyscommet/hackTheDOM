let currentLevel = parseInt(
  new URLSearchParams(window.location.search).get("level") || "0"
);

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

  const nextButton = document.getElementById("next");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      loadLevel(currentLevel + 1);
      currentLevel++;
    });
  }
}

loadLevel(currentLevel);
