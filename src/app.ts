import { PokemonInt, TransformedPokemonInt } from "./PokemonInt";

const container: HTMLElement | any = document.getElementById("app");

const getOnePokemon = async (): Promise<void> => {
  const id: HTMLElement | any = document.getElementById("pokemon-number");
  const data: Response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id.value}`
  );
  if (data.status === 404) return missingNo();
  const pokemon: PokemonInt = await data.json();
  parsePokemon(pokemon);
};

const getPokemonByName = async (): Promise<void> => {
  const name: HTMLElement | any = document.getElementById("pokemon-name");
  const data: Response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.value.toLowerCase()}`
  );
  const pokemon: PokemonInt = await data.json();
  if (data.status === 404) return missingNo();
  parsePokemon(pokemon);
};

const parsePokemon = async (pokemon: PokemonInt): Promise<void> => {
  const pokemonType: string = pokemon.types
    .map((el: any) => el.type.name)
    .join(", ");
  const pokemonAbility: string = pokemon.abilities
    .map((el: any) => el.ability.name)
    .join(", ");
  const pokemonMoves: string = pokemon.moves
    .map((el: any) => el.move.name)
    .join(", ");
  const pokemonStats: string = pokemon.stats
    .map((el) => `${el.stat.name} - ${el.base_stat}`)
    .join(", ");
  const pokemonItems: string = pokemon.held_items
    .map((el) => el.item.name)
    .join(", ");

  const transformedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    femaleImage: pokemon.sprites.front_female,
    shinyImage: pokemon.sprites.front_shiny,
    dreamImage: pokemon.sprites.other.dream_world.front_default,
    type: pokemonType,
    ability: pokemonAbility,
    moves: pokemonMoves,
    stats: pokemonStats,
    items: pokemonItems,
    height: pokemon.height,
    weight: pokemon.weight,
  };
  await showPokemon(transformedPokemon);
};

const showPokemon = (pokemon: TransformedPokemonInt): void => {
  let images: string = `<img class="card--image" src=${pokemon.image} title="Normal">`;
  if (pokemon.femaleImage)
    images += `<img class="card--image" src=${pokemon.femaleImage} title="Female">`;
  if (pokemon.shinyImage)
    images += `<img class="card--image" src=${pokemon.shinyImage} title="Shiny">`;
  if (pokemon.dreamImage)
    images += `<img class="card--image" src=${pokemon.dreamImage} title="Dream World">`;
  const output: string = `
  <div class="card">
  <p class="card--id">#${pokemon.id}</p>
  ${images}
  <p class="card--name">${pokemon.name.toUpperCase()}</p>
  <p class="card--details">Types: ${pokemon.type}</p>
  <p class="card--details">Abilities: ${pokemon.ability}</p>
  <p class="card--details">Moves: ${pokemon.moves}</p>
  <p class="card--details">Base Stats: ${pokemon.stats}</p>
  <p class="card--details">Items: ${pokemon.items}</p>
  <p class="card--details">Height: ${pokemon.height} | Weight: ${
    pokemon.weight
  }</p>
  </div>`;
  container.innerHTML = output;
};

const missingNo = () => {
  const output: string = `
  <div class="card">
  <p class="card-id">#0</p>
  <img class="card--image" src="./src/img/missingno.png" title="Data Not Found">
  <p class="card--name">ERROR: MISSING NO.</p>
  <p class="card--details">Types: unknown</p>
  <p class="card--details">Abilities: unknown</p>
  <p class="card--details">Moves: unknown</p>
  <p class="card--details">Base Stats: unknown</p>
  <p class="card--details">Items: unknown</p>
  <p class="card--details">Height: unknown | Weight: unknown</p>
  </div>
  `;
  container.innerHTML = output;
};
