const book = {
    title : "1984",
    author : "George Orwell",
    isAvailable : true,


    checkOut : function() {
        this.isAvailable = false;

    },
    cheickIn : function() {
        this.isAvailable = true;
    }
};

console.log(book.isAvailable);
book.checkOut();
console.log(book.isAvailable);
book.cheickIn();
console.log(book.isAvailable);

