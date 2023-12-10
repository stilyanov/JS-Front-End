function loadRepos() {
	const username = document.getElementById('username').value;
	const reposList = document.getElementById('repos');
	const url = `https://api.github.com/users/${username}/repos`;

	reposList.textContent = '';

	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const repositories = Array.from(data);

			repositories.forEach((repo) => {
				addRepositories(repo.html_url, repo.full_name)
			})
		})
		.catch((err) => {
			console.log(err);
		})

	function addRepositories(urlRepo, nameRepo) {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = urlRepo;
		a.textContent = nameRepo;
		li.appendChild(a);
		reposList.appendChild(li);
	}
}