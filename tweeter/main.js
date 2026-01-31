const tweeter = Tweeter();
const renderer = Renderer();

// This should render the initial dummy data
renderer.renderPosts(tweeter.getPosts());

// ---- Add Post (Twit) ----
$("#twit").on("click", function () {
    const input = $("#input").val().trim();
    if (!input) return;
    tweeter.addPost(input);

    $("#input").val("")

    renderer.renderPosts(tweeter.getPosts());
})


// ---- Delete Post ----
$("#posts").on("click", ".delete", function () {
    const postId = $(this).closest(".post").data("id");
    tweeter.removePost(postId);
    renderer.renderPosts(tweeter.getPosts())
})


// ---- Add Comment ----
$("#posts").on("click", ".comment-button", function () {
    const postId = $(this).closest(".post").data("id")
    const commentText = $(this).siblings(".comment-input").val().trim();

    if (!commentText) return;

    tweeter.addComment(postId, commentText);
    $(this).siblings(".comment-input").val("")

    renderer.renderPosts(tweeter.getPosts());
})

// ---- Delete Comment ----
$("#posts").on("click", ".delete-comment", function () {
    const postId = $(this).closest(".post").data("id")
    const commentId = $(this).data("id")


    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})