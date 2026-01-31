const Tweeter = function () {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];
    let _postIdCounter = _posts.length;
    let _commentIdCounter = _posts.reduce((count, p) => {
        return count + p.comments.length
    }, 0)
    const getPosts = function () {
        return _posts;
    }
    const addPost = function (text) {
        _postIdCounter++;
        _posts.push({ text, id: `p${_postIdCounter}`, comments: [] })

    }
    const removePost = function (postID) {
        const index = _posts.findIndex(p => p.id == postID);
        if (index !== -1) {
            _posts.splice(index, 1)
        }
    }
    const addComment = function (postID, text) {
        const pIndex = _posts.findIndex(p => p.id == postID);
        const pComments = _posts[pIndex]["comments"];

        _commentIdCounter++;
        pComments.push({ id: `c${_commentIdCounter}`, text });

    }
    const removeComment = function (postID, commentID) {
        const pIndex = _posts.findIndex(p => p.id == postID);
        const pComments = _posts[pIndex]["comments"];
        const cIndex = pComments.findIndex(c => c.id == commentID);

        pComments.splice(cIndex, 1);
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}


const tweeter = Tweeter();

// Test adding a post
tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());
// Should add: {text: "This is my own post!", id: "p3", comments: []}

// Test removing a post
tweeter.removePost("p1");
console.log(tweeter.getPosts());
// Should only have two posts left

// Test adding comments
tweeter.addComment("p3", "Damn straight it is!");
tweeter.addComment("p2", "Second the best!");
console.log(tweeter.getPosts());

// Test removing comments
tweeter.removeComment("p2", "c6");
console.log(tweeter.getPosts());

