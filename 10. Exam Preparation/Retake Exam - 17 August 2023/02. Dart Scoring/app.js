window.addEventListener("load", solve);

function solve() {

	const playerNameInput = document.getElementById('player');
	const scoreInput = document.getElementById('score');
	const roundInput = document.getElementById('round');
	const addButton = document.getElementById('add-btn');
	const sureList = document.getElementById('sure-list');
	const scoreBoardList = document.getElementById('scoreboard-list');

	const clearButton = document.querySelector('.clear')

	addButton.addEventListener('click', () => {

		const playerName = playerNameInput.value;
		const score = scoreInput.value;
		const round = roundInput.value;

		if (!playerName || !score || !round) {
			return;
		}

		const li = document.createElement('li');
		li.className = 'dart-item';

		const article = document.createElement('article');

		const paragraphName = document.createElement('p');
		paragraphName.textContent = playerName;

		const paragraphScore = document.createElement('p');
		paragraphScore.textContent = `Score: ${score}`;

		const paragraphRound = document.createElement('p');
		paragraphRound.textContent = `Round: ${round}`;

		const editButton = document.createElement('button');
		editButton.classList.add('btn');
		editButton.classList.add('edit');
		editButton.textContent = 'edit';

		const okButton = document.createElement('button');
		okButton.classList.add('btn');
		okButton.classList.add('ok');
		okButton.textContent = 'ok';

		article.appendChild(paragraphName);
		article.appendChild(paragraphScore);
		article.appendChild(paragraphRound);

		li.appendChild(article);
		li.appendChild(editButton);
		li.appendChild(okButton);

		sureList.appendChild(li);

		playerNameInput.value = '';
		scoreInput.value = '';
		roundInput.value = '';

		addButton.disabled = true;

		editButton.addEventListener('click', () => {

			playerNameInput.value = playerName;
			scoreInput.value = score;
			roundInput.value = round;

			sureList.removeChild(li);

			addButton.disabled = false;
		});


		okButton.addEventListener('click', () => {
			// sureList.removeChild(li);
			editButton.remove();
			okButton.remove();

			scoreBoardList.appendChild(li);

			// sureList.innerHTML = '';

			addButton.disabled = false;

		});

		clearButton.addEventListener('click', () => {
			location.reload();

		});

	});
}