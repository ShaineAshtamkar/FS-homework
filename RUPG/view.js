export class RUPGView {
    constructor() {
        // Banner
        this.profilePhoto = document.querySelector(".profile-photo");
        this.userName = document.getElementById("user-name");
        this.userLocation = document.getElementById("user-location");

        // Quote
        this.quoteText = document.getElementById("quote-text");
        this.quoteAuthor = document.getElementById("quote-author");

        // Pokemon
        this.pokemonImg = document.getElementById("pokemon-img");
        this.pokemonName = document.getElementById("pokemon-name");

        // About
        this.aboutText = document.getElementById("about-text");

        // Friends
        this.friendsList = document.getElementById("friends-list");

        // Button
        this.generateBtn = document.querySelector(".btn.generate");
    }
    setLoading(isLoading) {
        this.generateBtn.disabled = isLoading;

        if (isLoading) {
            this.quoteText.textContent = "Loading...";
            this.quoteAuthor.textContent = "";
            this.pokemonName.textContent = "";
            this.aboutText.textContent = "";
            this.friendsList.innerHTML = "";
        }

    }
    renderPage(data) {
        // Main user
        this.userName.textContent = `${data.mainUser.firstName} ${data.mainUser.lastName}`;
        this.userLocation.textContent = `${data.mainUser.city}, ${data.mainUser.state}`;
        this.profilePhoto.src = data.mainUser.photo;

        // Quote
        this.quoteText.textContent = `"${data.quote.text}"`;
        this.quoteAuthor.textContent = `— ${data.quote.author}`;
        this.pokemonName.textContent = data.pokemon.name;

        // Pokemon
        this.pokemonImg.src = data.pokemon.image;

        // About me
        this.aboutText.textContent = data.aboutMe;

        // Friends
        this.friendsList.innerHTML = "";
        data.friends.forEach((f) => {
            const li = document.createElement("li");
            li.textContent = `${f.firstName} ${f.lastName}`;
            this.friendsList.appendChild(li);
        })
    }

    showError(message) {
        this.quoteText.textContent = message;
        this.quoteAuthor.textContent = "";

        this.pokemonName.textContent = "";
        this.aboutText.textContent = "";
        this.friendsList.innerHTML = "";
    }
}








