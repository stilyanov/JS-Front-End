function attachEvents() {

	const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

	const loadButton = document.getElementById('btnLoad');

	const createButton = document.getElementById('btnCreate');
	const phoneBook = document.getElementById('phonebook');

	loadButton.addEventListener('click', loadContacts);
	createButton.addEventListener('click', createContact);

	async function loadContacts() {

		const request = await fetch(baseUrl);
		const result = await request.json();

		for (const contact of Object.values(result)) {
			console.log(contact);

			const li = document.createElement('li');
			li.textContent = `${contact.person}: ${contact.phone}`;

			const deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete';

			li.appendChild(deleteButton);

			phoneBook.appendChild(li);

			deleteButton.addEventListener('click', () => {

				const id = contact._id;

				fetch(baseUrl + `/${id}`, {
					method: 'DELETE',
				});

				li.remove();

			});

		}
	}


	function createContact() {

		const personField = document.getElementById('person').value;
		const phoneField = document.getElementById('phone').value;

		console.log(personField);
		console.log(phoneField);

		fetch(baseUrl, {
			method: 'POST',
			body: JSON.stringify(
				{
					person: personField,
					phone: phoneField
				}
			)
		})
			.then((response) => response.json())
			.then(() => {
				loadContacts();
				personField.value = '';
				phoneField.value = '';
			})
	}

}

attachEvents();