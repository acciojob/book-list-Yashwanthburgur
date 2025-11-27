const addBook = document.getElementById('submit');
addBook.addEventListener('click', addBookRow);

function addBookRow(event) {
	event.preventDefault(); // Prevent form submission behavior
	
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;
	
	// Validate inputs
	if (!title || !author || !isbn) {
		alert('Please fill in all fields');
		return;
	}
	
	const bookList = document.getElementById('book-list');
	const newRow = bookList.insertRow();
	
	// Add cells with data
	const cell1 = newRow.insertCell();
	cell1.textContent = title;
	
	const cell2 = newRow.insertCell();
	cell2.textContent = author;
	
	const cell3 = newRow.insertCell();
	cell3.textContent = isbn;
	
	// Add delete button cell
	const cell4 = newRow.insertCell();
	const deleteBtn = document.createElement('button');
	deleteBtn.className = 'delete';
	deleteBtn.textContent = 'X';
	deleteBtn.addEventListener('click', function() {
		bookList.deleteRow(newRow.rowIndex - 1);
	});
	cell4.appendChild(deleteBtn);
	
	// Clear input fields
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
}