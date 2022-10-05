let library = [];
let removeBtns = [];
let bookArr = [];
const cardArea = document.querySelector("#area");
const titleRow = document.getElementById("titleRow");

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

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};
const addBtn = document.getElementById("addBook");

function addBookForm() {
  const newTitle = document.getElementById("title").value;
  const newAuthor = document.getElementById("author").value;
  const newPages = document.getElementById("pages").value;
  const isRead = document.getElementById("checkbox").checked;
  addBook(newTitle, newAuthor, newPages, isRead);
}
function displayLib() {
  cardArea.innerHTML = "";
  cardArea.appendChild(titleRow);
  for (var i = 0; i < library.length; i++) {
    const card = document.createElement("div");
    card.innerHTML = `<p>${library[i].title}</p>
  <p>${library[i].author}</p>
  <p>${library[i].pages}</p>
  <button id="btn-${i}" type="button" class="btn bg-gray-300 border-gray-400">${
      library[i].read ? "Read" : "Not Read"
    }</button>
  <button id="del-btn-${i}"class="btn bg-red-600 border-red-700">Delete</button>`;
    card.classList = `card card-${i} grid grid-cols-5 gap-x-20 justify-center items-center border-b border-gray-400 p-2`;
    cardArea.appendChild(card);
    bookArr[i] = card;
    removeBtns[i] = document.getElementById(`del-btn-${i}`);
    removeBtns[i].addEventListener('click',()=>{
      removeBook(event.target.id[event.target.id.length - 1]);
    });
  }
}

displayLib();

function removeBook(id){
  cardArea.removeChild(bookArr[id]);
  library.splice(id,1);
      displayLib();
}

addBtn.addEventListener("click", () => {
  addBookForm();
  displayLib();
});

