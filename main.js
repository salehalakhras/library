let library = [];
const cardArea = document.querySelector('#area');

function Book(title, author, pages, read, price) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.price = price;
}

function addBook(title, author, pages, read, price) {
  let newBook = new Book(title, author, pages, read, price);
  library.push(newBook);
}

addBook("s", "s", "s", "s", "s");
addBook("s", "s", "s", "s", "s");
addBook("s", "s", "s", "s", "s");
addBook("s", "s", "s", "s", "s");
addBook("s", "s", "s", "s", "s");
addBook("s", "s", "s", "s", "s");
addBook("s", "s", "s", "s", "s");
addBook("s", "s", "s", "s", "s");
addBook("s", "s", "s", "s", "s");
addBook("s", "s", "s", "s", "s");
addBook("s", "s", "s", "s", "s");
for(let i=0;i<library.length;i++) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<p>${library[i].title}</p>
  <p>${library[i].author}</p>
  <p>${library[i].pages}</p>
  <p>${library[i].price}</p>
  <button id="btn-${i}" class="btn bg-gray-300 border-gray-400">Read</button>
  <button id="del-btn-${i}"class="btn bg-red-600 border-red-700">Delete</button>`;
  card.classList = 'card grid grid-cols-6 gap-x-20 justify-center items-center border-b border-gray-500 p-2';
  cardArea.appendChild(card);
}

