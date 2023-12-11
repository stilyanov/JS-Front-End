async function attachEvents() {
	const baseUrl = "http://localhost:3030/jsonstore/collections/students";

	const students = document.getElementById("results");
	const [firstName, lastName, facultyNumber, grade] = document.getElementsByTagName('input');
	const submitButton = document.getElementById('submit');

	const tableBody = document.querySelector('tbody');

	const request = await fetch(baseUrl);
	const response = await request.json();

	Object.values(response).forEach((student) => {

		const tr = document.createElement('tr');
		const tdFirstName = document.createElement('td');
		const tdLastName = document.createElement('td');
		const tdFacultyNumber = document.createElement('td');
		const tdGrade = document.createElement('td');

		tdFirstName.textContent = student.firstName;
		tdLastName.textContent = student.lastName;
		tdFacultyNumber.textContent = student.facultyNumber;
		tdGrade.textContent = student.grade;

		tr.appendChild(tdFirstName);
		tr.appendChild(tdLastName);
		tr.appendChild(tdFacultyNumber);
		tr.appendChild(tdGrade);
		tableBody.appendChild(tr);

	});

	submitButton.addEventListener('click', createStudent);

	async function createStudent() {

		const newStudent = {
			firstName: firstName.value,
			lastName: lastName.value,
			facultyNumber: facultyNumber.value,
			grade: grade.value
		}

		let isValidRequest = !firstName !== '' && !lastName !== '' && !facultyNumber !== '' && !grade !== '';

		if (isValidRequest) {

			await fetch(baseUrl, {
				method: 'POST',
				body: JSON.stringify(newStudent)
			})

			const tr = document.createElement('tr');
			const tdFirstName = document.createElement('td');
			const tdLastName = document.createElement('td');
			const tdFacultyNumber = document.createElement('td');
			const tdGrade = document.createElement('td');
	
			tdFirstName.textContent = newStudent.firstName;
			tdLastName.textContent = newStudent.lastName;
			tdFacultyNumber.textContent = newStudent.facultyNumber;
			tdGrade.textContent = newStudent.grade;
	
			tr.appendChild(tdFirstName);
			tr.appendChild(tdLastName);
			tr.appendChild(tdFacultyNumber);
			tr.appendChild(tdGrade);
			tableBody.appendChild(tr);
		}
		
	}
}

attachEvents();