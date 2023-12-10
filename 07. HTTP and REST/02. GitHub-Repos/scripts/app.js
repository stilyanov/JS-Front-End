function loadRepos() {
	let result = document.getElementById("res");

	const url = 'https://api.github.com/users/testnakov/repos';

	fetch(url)
		.then(response => {
			return response.text();
		})
		.then(data => {
			result.textContent = data;
		})
		.catch(error => {
			console.log(error);
		})
}