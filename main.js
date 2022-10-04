let library = [];
let i = 0;
const cardArea = document.querySelector("#area");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(title, author, pages, read, price) {
  let newBook = new Book(title, author, pages, read);
  library.push(newBook);
}

const addBtn = document.getElementById("addBook");

addBtn.addEventListener("click", () => {
  const newTitle = document.getElementById("title").value;
  const newAuthor = document.getElementById("author").value;
  const newPages = document.getElementById("pages").value;
  const isRead = document.getElementById("checkbox").checked;
  addBook(newTitle, newAuthor, newPages, isRead);
  console.log(library);
  for (i; i < library.length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<p>${library[i].title}</p>
  <p>${library[i].author}</p>
  <p>${library[i].pages}</p>
  <button id="btn-${i}" class="btn bg-gray-300 border-gray-400">${
      library[i].read ? "Read" : "Not Read"
    }</button>
  <button id="del-btn-${i}"class="btn bg-red-600 border-red-700">Delete</button>`;
    card.classList =
      "card grid grid-cols-5 gap-x-20 justify-center items-center border-b border-gray-400 p-2";
    cardArea.appendChild(card);
  }
});
