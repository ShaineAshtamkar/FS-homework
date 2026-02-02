
const { RUPGApi } = require("./model");
const { RUPGView } = require("./view");


class RUPGController {
    constructor(api, view) {
        this.api = api;
        this.view = view;

        this.generate();
    }
    generate() {
        this.view.generateBtn.addEventListener("click", () => {
            this.generateUserPage();
        })
    }

    async generateUserPage() {
        this.view.setLoading(true);
        const [usersReq, quoteReq, pokemonReq, baconReq] = await Promise.all([
            this.api.getRandomUsers(7),
            this.api.getKanyeQuote(),
            this.api.getRandomPokemon(1025),
            this.api.getBaconText(),

        ])
        console.log(pokemonReq);

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
                    pokemonReq.sprites?.front_default ||
                    "",
            },
            aboutMe: baconRes[0]

        }
        this.view.renderPage(data);



    }

}

new RUPGController();
module.exports = { RUPGController };
