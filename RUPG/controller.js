

import { RUPGApi } from "./model.js";
import { RUPGView } from "./view.js";


export class RUPGController {
    constructor() {
        this.api = new RUPGApi();
        this.view = new RUPGView();

        this.view.generateBtn.addEventListener("click", () => {
            this.generate();
        })
    }
    async generate() {
        try {
            this.view.setLoading(true);
            const [usersReq, quoteReq, pokemonReq, baconReq] = await Promise.all([
                this.api.getRandomUsers(7),
                this.api.getKanyeQuote(),
                this.api.getRandomPokemon(1025),
                this.api.getBaconText(),

            ])
            const users = usersReq.results;
            const main = users[0];
            const friends = users.slice(1);

            const data = {
                mainUser: {
                    firstName: main.name.first,
                    lastName: main.name.last,
                    city: main.location.city,
                    state: main.location.state,
                    photo: main.picture.large,
                },
                friends: friends.map((u) => ({
                    firstName: u.name.first,
                    lastName: u.name.last,
                })),
                quote: { text: quoteReq.quote, author: "Kanye West" },
                pokemon: {
                    name: pokemonReq.name,
                    image:
                        pokemonReq.sprites?.other?.["official-artwork"]?.front_default ||
                        "",
                },
                aboutMe: baconReq[0]

            }
            this.view.renderPage(data);

        } catch (err) {
            console.log(err)
            this.view.showError("Couldn’t generate a user right now. Please try again in a moment.");

        } finally {
            this.view.setLoading(false);
        }

    }



}
new RUPGController();

