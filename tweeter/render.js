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

            const $post = $("<div>")
                .addClass("post")
                .attr("data-id", p.id)

            const $postText = $("<div>")
                .addClass("post-text")
                .text(p.text)

            const $comments = $("<div>")
                .addClass("comments")

            p.comments.forEach(c => {
                const $commentLine = $("<div>")
                    .addClass("comment-line")

                const $deleteComment = $("<span>")
                    .addClass("delete-comment")
                    .attr("data-id", c.id)
                    .text("X")

                const $commentText = $("<span>")
                    .addClass("comment")
                    .attr("data-id", c.id)
                    .text(" " + c.text)

                $commentLine.append($deleteComment, $commentText)
                $comments.append($commentLine)
            })

            const $commentInput = $("<input>")
                .attr("type", "text")
                .attr("placeholder", "Got something to say?")
                .addClass("comment-input")

            const $commentButton = $("<button>")
                .addClass("comment-button")
                .text("Comment")


            const $deletePost = $("<button>")
                .addClass("delete")
                .attr("data-id", p.id)
                .text("Delete Post")

            $post.append($postText,
                $comments,
                $commentInput,
                $commentButton,
                $deletePost)


            $postsContainer.append($post)

        })
    }

    return { renderPosts }
}
