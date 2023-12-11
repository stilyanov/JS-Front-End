function attachEvents() {

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const posts = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');


    let allPosts = {};

    document.getElementById('btnLoadPosts').addEventListener('click', async () => {

        posts.innerHTML = '';

        const response = await fetch(postsUrl);
        allPosts = await response.json();

        for (const [postId, postObj] of Object.entries(allPosts)) {

            const option = document.createElement('option');
            option.value = postId;
            option.textContent = postObj.title;

            posts.appendChild(option);
        }

    });


    document.getElementById('btnViewPost').addEventListener('click', async () => {

        const postId = posts.value;

        postTitle.textContent = allPosts[postId].title;
        postBody.textContent = allPosts[postId].body;

        const response = await fetch(commentsUrl);
        const result = await response.json();

        const filteredComments = Object.values(result). filter(e => e.postId === postId);
        filteredComments.forEach((comment) => {

            const li = document.createElement('li');
            li.id = comment.id;
            li.textContent = comment.text;

            postComments.appendChild(li);
        })
    });
}

attachEvents();