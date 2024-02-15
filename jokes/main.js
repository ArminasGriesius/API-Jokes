function generateJoke(jokeType) {
    if (jokeType === "chuck") {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then(
          (json) => (document.getElementById("jokeText").innerText = json.value)
        )
        .catch((error) => console.error(error));
    } else if (jokeType === "dad") {
      fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "text/plain",
        },
      })
        .then((response) => response.text())
        .then((text) => (document.getElementById("jokeText").innerText = text))
        .catch((error) => console.error(error));
    }
  }