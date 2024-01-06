const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', pages: 180 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', pages: 281 },
  { title: '1984', author: 'George Orwell', genre: 'Dystopian', pages: 328 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', pages: 224 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', pages: 310 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Fantasy', pages: 279 },
];
let fictions=books.map(book=>{book.genre==='Fiction';
									return book}
								)
								console.log(fictions);
								


