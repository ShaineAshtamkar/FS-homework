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

    }

}



