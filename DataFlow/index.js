const posts = [{ name: "Steve", text: "Hello" }, { name: "Dev", text: "Hey" }];

render = function () {
    $("#timeline").empty()
    for (let post of posts) {
        $("#timeline").append(`
            <div class="post-box">
            <span>${post.name}:</span>
              <span><strong>${post.text}</strong></span>
             </div>`)
    }
}

render()
$("#post").on("click", function () {
    posts.push({
        name: $("#input-name").val(),
        text: $("#input-text").val()

    })
    render();
})

