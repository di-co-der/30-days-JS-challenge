// let book = {
//   title: "the success",
//   author: "DR",
//   year: "2025",
//   ta: () => {
//     return `${(book.title, book.author)}`;
//   },
//   updatedate: (para) => {
//     para = 2024;
//     book.year = para;
//   },
// };

// // console.log(book);
// // console.log(book.title);
// // console.log(book.ta());
// console.log(book.updatedate());
// console.log(book);

// let library = {
//   name: "gyan",
//   books: [
//     { title: "the success", author: "DR", year: "2025" },

//     { title: "the success", author: "DR", year: "2025" },

//     { title: "the success", author: "DR", year: "2025" },

//     { title: "the success", author: "DR", year: "2025" },

//     { title: "the success", author: "DR", year: "2025" },
//   ],
// };

// console.log(library);
// console.log(library.name);
// console.log(library.books);


let book1 = {
    title: "the success",
    author: "DR",
    year: "2025",
    ta: function() {
      return `${this.title} by ${this.author}`;
    }
};

console.log(book1.ta());

for(let x in book1){
    console.log(x);
    console.log(book1[x]);
}