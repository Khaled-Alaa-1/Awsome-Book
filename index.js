const storeData = JSON.parse(localStorage.getItem('Added Books')) || [];
function addBooks(books) {
  return books.map((book, index) => `
       <p>${book.title}</p>
       <p>${book.author}</p>
       <button class="remove" data-index="${index}" type="button">Remove</button>
       <hr>
     `).join('');
}

function displayBooks() {
  const container = document.querySelector('.container');
  const div = document.createElement('div');
  div.classList.add('book-list');
  div.innerHTML = addBooks(storeData);
  container.innerHTML = '';
  container.appendChild(div);
}

function updateData() {
  localStorage.setItem('Added Books', JSON.stringify(storeData));
}

function removeBook(index) {
  storeData.splice(index, 1);
  updateData();
  displayBooks();
}

function addNewBook(title, author) {
  const newBook = {
    title,
    author,
  };

  storeData.push(newBook);

  updateData();
  displayBooks();
}

const container = document.querySelector('.container');
container.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    const { index } = event.target.dataset;
    removeBook(index);
  }
});

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  addNewBook(title, author);
  form.reset();
});

displayBooks();
