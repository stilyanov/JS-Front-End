window.addEventListener("load", solve);

function solve() {

	const playerNameInput = document.getElementById('player');
	const scoreInput = document.getElementById('score');
	const roundInput = document.getElementById('round');
	const addButton = document.getElementById('add-btn');
	const sureList = document.getElementById('sure-list');
	const scoreBoardList = document.getElementById('scoreboard-list');

	const clearButton = document.querySelectorAll('button')[1];

	addButton.addEventListener('click', () => {

		if (!playerNameInput.value || !scoreInput.value || !roundInput.value) {
			return;
		}

		const playerName = playerNameInput.value;
		const score = scoreInput.value;
		const round = roundInput.value;

		const li = document.createElement('li');
		li.classList = 'dart-item';

		const article = document.createElement('article');

		const paragraphName = document.createElement('p');
		paragraphName.textContent = playerName;

		const paragraphScore = document.createElement('p');
		paragraphScore.textContent = `Score: ${score}`;

		const paragraphRound = document.createElement('p');
		paragraphRound.textContent = `Round: ${round}`;

		const editButton = document.createElement('button');
		editButton.classList = 'btn edit';
		editButton.textContent = 'edit';

		const okButton = document.createElement('button');
		okButton.classList = 'btn ok';
		okButton.textContent = 'ok';

		article.appendChild(paragraphName);
		article.appendChild(paragraphScore);
		article.appendChild(paragraphRound);

		li.appendChild(article);
		li.appendChild(editButton);
		li.appendChild(okButton);

		sureList.appendChild(li);

		addButton.disabled = true;

		playerNameInput.value = '';
		scoreInput.value = '';
		roundInput.value = '';

		editButton.addEventListener('click', () => {

			playerNameInput.value = playerName;
			scoreInput.value = score;
			roundInput.value = round;

			sureList.removeChild(li);

			addButton.disabled = false;
		});


		okButton.addEventListener('click', () => {
			
			editButton.remove();
			okButton.remove();

			scoreBoardList.append(li);

			sureList.innerHTML = '';

			addButton.disabled = false;
		});

	});

	clearButton.addEventListener('click', () => {
		location.reload();
	});

}