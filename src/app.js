var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var container = document.getElementById("app");
var getOnePokemon = function () { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, pokemon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = document.getElementById("pokemon-number");
                return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/" + id.value)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                pokemon = _a.sent();
                parsePokemon(pokemon);
                return [2 /*return*/];
        }
    });
}); };
var getPokemonByName = function () { return __awaiter(void 0, void 0, void 0, function () {
    var name, data, pokemon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = document.getElementById("pokemon-name");
                return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/" + name.value.toLowerCase())];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                pokemon = _a.sent();
                parsePokemon(pokemon);
                return [2 /*return*/];
        }
    });
}); };
var parsePokemon = function (pokemon) { return __awaiter(void 0, void 0, void 0, function () {
    var pokemonType, pokemonAbility, pokemonMoves, pokemonStats, pokemonItems, transformedPokemon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pokemonType = pokemon.types
                    .map(function (el) { return el.type.name; })
                    .join(", ");
                pokemonAbility = pokemon.abilities
                    .map(function (el) { return el.ability.name; })
                    .join(", ");
                pokemonMoves = pokemon.moves
                    .map(function (el) { return el.move.name; })
                    .join(", ");
                pokemonStats = pokemon.stats
                    .map(function (el) { return el.stat.name + " - " + el.base_stat; })
                    .join(", ");
                pokemonItems = pokemon.held_items
                    .map(function (el) { return el.item.name; })
                    .join(", ");
                transformedPokemon = {
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
                return [4 /*yield*/, showPokemon(transformedPokemon)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var showPokemon = function (pokemon) {
    var images = "<img class=\"card--image\" src=" + pokemon.image + " title=\"Normal\">";
    if (pokemon.femaleImage)
        images += "<img class=\"card--image\" src=" + pokemon.femaleImage + " title=\"Female\">";
    if (pokemon.shinyImage)
        images += "<img class=\"card--image\" src=" + pokemon.shinyImage + " title=\"Shiny\">";
    if (pokemon.dreamImage)
        images += "<img class=\"card--image\" src=" + pokemon.dreamImage + " title=\"Dream World\">";
    var output = "\n  <div class=\"card\">\n  <p class=\"card--id\">#" + pokemon.id + "</p>\n  " + images + "\n  <p class=\"card--name\">" + pokemon.name.toUpperCase() + "</p>\n  <p class=\"card--details\">Types: " + pokemon.type + "</p>\n  <p class=\"card--details\">Abilities: " + pokemon.ability + "</p>\n  <p class=\"card--details\">Moves: " + pokemon.moves + "</p>\n  <p class=\"card--details\">Base Stats: " + pokemon.stats + "</p>\n  <p class=\"card--details\">Items: " + pokemon.items + "</p>\n  <p class=\"card--details\">Height: " + pokemon.height + " | Weight: " + pokemon.weight + "</p>\n  </div>";
    container.innerHTML = output;
};
