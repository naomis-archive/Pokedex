export interface TransformedPokemonInt {
  id: number;
  name: string;
  image: string;
  femaleImage: string;
  shinyImage: string;
  dreamImage: string;
  type: string;
  ability: string;
  moves: string;
  stats: string;
  items: string;
  height: number;
  weight: number;
}

export interface PokemonInt {
  abilities: Array<Abilities>;
  base_experience: number;
  forms: Array<Form>;
  game_indices: Array<GameIndex>;
  height: number;
  held_items: Array<HeldItems>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Moves>;
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Array<Stats>;
  types: Array<Types>;
  weight: number;
}

interface Abilities {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Ability {
  name: string;
  url: string;
}

interface Form {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: Record<string, unknown>;
}

interface HeldItems {
  item: Item;
  version_details: Array<Record<string, unknown>>;
}

interface Item {
  name: string;
  url: string;
}

interface Moves {
  move: Move;
  version_group_details: Array<Record<string, unknown>>;
}

interface Move {
  name: string;
  url: string;
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: OtherSprite;
  versions: Record<string, unknown>;
}

interface OtherSprite {
  dream_world: DreamSprite;
}

interface DreamSprite {
  front_default: string;
  front_female: string;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

interface Stat {
  name: string;
  url: string;
}

interface Types {
  slot: number;
  type: Type;
}

interface Type {
  name: string;
  url: string;
}
