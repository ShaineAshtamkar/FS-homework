export class RUPGApi {
    async fetchJson(url) {
        const req = await fetch(url);
        if (!req.ok) throw new Error(`Request failed: ${req.status}`);
        return req.json();
    }
    async getRandomUsers(count = 7) {
        return this.fetchJson(`https://randomuser.me/api/?results=${count}`);
    }
    async getKanyeQuote() {
        return this.fetchJson("https://api.kanye.rest");
    }

    async getRandomPokemon(maxPokemonId = 1025) {
        const id = Math.floor(Math.random() * maxPokemonId) + 1;
        return this.fetchJson(`https://pokeapi.co/api/v2/pokemon/${id}`);

    }
    async getBaconText() {
        return this.fetchJson(
            "https://baconipsum.com/api/?type=meat-and-filler&paras=1"
        )
    }

}
