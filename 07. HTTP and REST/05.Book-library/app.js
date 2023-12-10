function attachEvents() {

document.getElementById('loadBooks').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    for (const bookId in data) {
        const book = data[bookId];
        const row = `
            <tr data-id="${bookId}">
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button class="editBtn">Edit</button>
                    <button class="deleteBtn">Delete</button>
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    }
});

document.querySelector('#form button').addEventListener('click', async () => {
    const titleInput = document.querySelector('input[name="title"]');
    const authorInput = document.querySelector('input[name="author"]');
    
    const title = titleInput.value;
    const author = authorInput.value;
    
    if (title.trim() !== '' && author.trim() !== '') {
        const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, title })
        });
        titleInput.value = '';
        authorInput.value = '';
        document.getElementById('loadBooks').click();
    } else {
        alert('Please fill in both title and author fields');
    }
});

document.querySelector('table').addEventListener('click', async (e) => {
    if (e.target.classList.contains('editBtn')) {
        const row = e.target.closest('tr');
        const bookId = row.getAttribute('data-id');
        const title = row.querySelector('td:nth-child(1)').textContent;
        const author = row.querySelector('td:nth-child(2)').textContent;
        
        document.querySelector('input[name="title"]').value = title;
        document.querySelector('input[name="author"]').value = author;
        
        function onSubmit() {
            const updatedTitle = document.querySelector('input[name="title"]').value;
            const updatedAuthor = document.querySelector('input[name="author"]').value;
            
            if (updatedTitle.trim() !== '' && updatedAuthor.trim() !== '') {
                fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ author: updatedAuthor, title: updatedTitle })
                })
                .then(response => {
                    if (response.ok) {
                        document.getElementById('loadBooks').click();
                    } else {
                        console.error('Error updating book');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            } else {
                alert('Please fill in both title and author fields');
            }
        }
        
        document.querySelector('#form button').removeEventListener('click', onSubmit);
        document.querySelector('#form button').addEventListener('click', onSubmit);
    } else if (e.target.classList.contains('deleteBtn')) {
        const row = e.target.closest('tr');
        const bookId = row.getAttribute('data-id');
        
        const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            row.remove();
        } else {
            console.error('Error deleting book');
        }
    }
});

}

attachEvents();