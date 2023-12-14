window.addEventListener("load", solve);

function solve() {

	const studentNameInput = document.getElementById('student');
	const universityInput = document.getElementById('university');
	const scoreInput = document.getElementById('score');
	const nextButton = document.getElementById('next-btn');
	const previewList = document.getElementById('preview-list');
	const candidatesList = document.getElementById('candidates-list');

	nextButton.addEventListener('click', () => {

		if (!studentNameInput.value || !universityInput.value || !scoreInput.value) {
			return;
		}

		const studentName = studentNameInput.value;
		const university = universityInput.value;
		const score = scoreInput.value;

		const li = document.createElement('li');
		li.classList = "application";

		const article = document.createElement('article');

		const h4 = document.createElement('h4');
		h4.textContent = studentName;

		const firstParagraph = document.createElement('p');
		firstParagraph.textContent = `University: ${university}`;

		const secondParagraph = document.createElement('p');
		secondParagraph.textContent = `Score: ${score}`;

		const editButton = document.createElement('button');
		editButton.classList = "action-btn edit";
		editButton.textContent = "edit";

		const applyButton = document.createElement('button');
		applyButton.classList = "action-btn apply";
		applyButton.textContent = "apply";

		article.appendChild(h4);
		article.appendChild(firstParagraph);
		article.appendChild(secondParagraph);

		li.appendChild(article);
		li.appendChild(editButton);
		li.appendChild(applyButton);

		previewList.appendChild(li);

		nextButton.disabled = true;

		studentNameInput.value = "";
		universityInput.value = "";
		scoreInput.value = "";

		editButton.addEventListener('click', () => {

			studentNameInput.value = studentName;
			universityInput.value = university;
			scoreInput.value = score;

			previewList.innerHTML = '';

			nextButton.disabled = false;
		});

		applyButton.addEventListener('click', () => {

			const li = document.createElement('li');
			li.classList = "application";

			const article = document.createElement('article');

			const h4 = document.createElement('h4');
			h4.textContent = studentName;

			const firstParagraph = document.createElement('p');
			firstParagraph.textContent = `University: ${university}`;

			const secondParagraph = document.createElement('p');
			secondParagraph.textContent = `Score: ${score}`;

			article.appendChild(h4);
			article.appendChild(firstParagraph);
			article.appendChild(secondParagraph);

			li.appendChild(article);

			candidatesList.appendChild(li);

			previewList.innerHTML = '';

			nextButton.disabled = false;
		});

	});

}