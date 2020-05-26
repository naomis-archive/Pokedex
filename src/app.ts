const container: HTMLElement | any = document.getElementById("app");
const pokemons: number = 151;

interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

const fetchData = (): void => {
  for (let i = 1; i <= pokemons; i++) {
    setTimeout(function() {
      getPokemon(i);
    }, 20 * i);
  }
  setTimeout(() => alert("Ready to Search!"), 20 * 152);
};

const getPokemon = async (id: number): Promise<void> => {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon: any = await data.json();
  const pokemonType: string = pokemon.types
    .map((poke: any) => poke.type.name)
    .join(", ");

  const transformedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType
  };

  await showPokemon(transformedPokemon);
};

const showPokemon = (pokemon: IPokemon): void => {
  let output: string = `
  <div class="card">
  <p class="card--id">#${pokemon.id}</p>
  <img class="card--image" src=${pokemon.image} alt=${pokemon.name}>
  <p class="card--name">${pokemon.name.toUpperCase()}</p>
  <p class="card--details">${pokemon.type}</p>
  </div>`;
  container.innerHTML += output;
};

const getOnePokemon = async (): Promise<void> => {
  const id: HTMLElement | any = document.getElementById("pokemon-number");
  const data: Response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id.value}`
  );
  const pokemon: any = await data.json();
  const pokemonType: string = pokemon.types
    .map((poke: any) => poke.type.name)
    .join(", ");
  const transformedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType
  };
  container.innerHTML = "";
  showPokemon(transformedPokemon);
};

const getPokemonByName = async (): Promise<void> => {
  const name: HTMLElement | any = document.getElementById("pokemon-name");
  const data: Response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.value.toLowerCase()}`
  );
  const pokemon: any = await data.json();
  const pokemonType: string = pokemon.types
    .map((poke: any) => poke.type.name)
    .join(", ");
  console.log(data.status);
  const transformedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType
  };

  container.innerHTML = "";
  showPokemon(transformedPokemon);
};

fetchData();
