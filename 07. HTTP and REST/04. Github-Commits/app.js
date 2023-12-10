function loadCommits() {
    const githubUsername = document.getElementById('username').value;
    const githubRepo = document.getElementById('repo').value;
    const githubCommits = document.getElementById('commits');

    const url = `https://api.github.com/repos/${githubUsername}/${githubRepo}/commits`;


    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const commits = Array.from(data);

            commits.forEach((message) => {
                createListElement(message.commit.author.name, message.commit.message);
            });
        })
        .catch((err) => {
            console.log(err);
        })



    function createListElement(authorName, message) {
        const li = document.createElement('li');
        li.textContent = `${authorName}: ${message}`;
        githubCommits.appendChild(li);
    }
}