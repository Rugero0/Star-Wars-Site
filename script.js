const $content = document.querySelector(".cards-container");

let currentPageUrl = "https://swapi.dev/api/people/";

document.addEventListener("DOMContentLoaded", () => {
  try {
    fetchCards(currentPageUrl);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchCards(url) {
  const response = await fetch(url);
  const data = await response.json();
  $content.innerHTML = "";
  data.results.forEach((character) => {
    createCard(character);
  });
}

function createCard(character) {
  const card = document.createElement("div");
  card.style.backgroundImage = `url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(
    /\D/g,
    ""
  )}.jpg')`;
  console.log("CRIEI CARDS");
  card.className = "cards";

  const characterNameBG = document.createElement("div");
  characterNameBG.className = "character-name-bg";

  const characterName = document.createElement("span");
  characterName.className = "character-name";
  characterName.innerText = `${character.name}`;

  characterNameBG.appendChild(characterName);
  card.appendChild(characterNameBG);

  $content.appendChild(card);
}
