const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: String ,
    img : String,
    summary : String
});

const Book = mongoose.model("Book" , bookSchema);

module.exports = Book;