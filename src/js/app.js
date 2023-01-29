import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
const ul = document.querySelector("ul");
  // This block will be executed once the page is loaded and ready
  async function showPokemons(){
    const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
    const data = await fetchData.json();
    const pokemons = data.results;

    pokemons.forEach(p => {
      const li = document.createElement('li');
      li.innerText = p.name;
      ul.appendChild(li);
    });

  }

  showPokemons();

});
