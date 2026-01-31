// const Renderer = function () {
//     const renderPosts = function (posts) {
//         const postsContainer = document.getElementById("posts")
//         postsContainer.innerHTML = "";
//         posts.forEach(p => {
//             // ----- post wrapper -----
//             const postDiv = document.createElement("div");
//             postDiv.className = "post";
//             postDiv.dataset.id = p.id;

//             // ----- post text -----
//             const postTextDiv = document.createElement("div");
//             postTextDiv.className = "post-text";
//             postTextDiv.textContent = p.text;

//             // ----- delete post -----
//             const deletePostDiv = document.createElement("div");
//             deletePostDiv.className = "delete";
//             deletePostDiv.dataset.id = p.id;
//             deletePostDiv.textContent = "Delete Post";

//             // ----- comments container -----
//             const commentsDiv = document.createElement("div");
//             commentsDiv.className = "comments";

//             p.comments.forEach(c => {
//                 const commentDiv = document.createElement("div");
//                 commentDiv.className = "comment";
//                 commentDiv.dataset.id = c.id;
//                 commentDiv.textContent = c.text;

//                 const deleteCommentDiv = document.createElement("div");
//                 deleteCommentDiv.className = "delete-comment";
//                 deleteCommentDiv.dataset.id = c.id;
//                 deleteCommentDiv.textContent = "X"

//                 commentsDiv.appendChild(commentDiv);
//                 commentDiv.appendChild(deleteCommentDiv);

//             })
//             // ----- comment input -----
//             const commentInput = document.createElement("input");
//             commentInput.type = "text";
//             commentInput.placeholder = "Got something to say?";
//             commentInput.className = "comment-input";

//             // ----- comment button -----
//             const commentButton = document.createElement("button");
//             commentButton.className = "comment-button";
//             commentButton.textContent = "Comment";

//             // ----- assemble post -----
//             postDiv.appendChild(postTextDiv);
//             postDiv.appendChild(deletePostDiv);
//             postDiv.appendChild(commentsDiv);
//             postDiv.appendChild(commentInput);
//             postDiv.appendChild(commentButton);

//             postsContainer.appendChild(postDiv);

//         });
//     }
//     return { renderPosts }

// }

const Renderer = function () {

    const renderPosts = function (posts) {
        const $postsContainer = $("#posts")
        $postsContainer.empty()

        posts.forEach(p => {

            const $postDiv = $("<div>")
                .addClass("post")
                .attr("data-id", p.id)

            const $postTextDiv = $("<div>")
                .addClass("post-text")
                .text(p.text)

            const $deletePostDiv = $("<div>")
                .addClass("delete")
                .attr("data-id", p.id)
                .text("Delete Post")

            const $commentsDiv = $("<div>").addClass("comments")

            p.comments.forEach(c => {
                const $commentDiv = $("<div>")
                    .addClass("comment")
                    .attr("data-id", c.id)
                    .text(c.text)

                const $deleteCommentDiv = $("<div>")
                    .addClass("delete-comment")
                    .attr("data-id", c.id)
                    .text("X")

                $commentsDiv.append($commentDiv, $deleteCommentDiv)
            })

            const $commentInput = $("<input>")
                .attr("type", "text")
                .attr("placeholder", "Got something to say?")
                .addClass("comment-input")

            const $commentButton = $("<button>")
                .addClass("comment-button")
                .text("Comment")

            $postDiv.append(
                $postTextDiv,
                $deletePostDiv,
                $commentsDiv,
                $commentInput,
                $commentButton
            )

            $postsContainer.append($postDiv)
        })
    }

    return { renderPosts }
}
