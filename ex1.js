const booklist=["Java", "Python","C++"];
const book={
        getBook(){
            console.log(booklist);
        },
        addBook(bookname){
            console.log("Kirja "+bookname+" lisättiin");
        }

}
book.getBook();
book.addBook("Mongo");