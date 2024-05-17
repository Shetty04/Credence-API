const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/book.model.js");
const bookRoute = require("./routes/book.route.js");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
  res.send("Hello from node Api server");
});

// app.get("/api/books", async (req, res) => {
//   try {
//     const books = await Book.find({});
//     res.status(200).json(books);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findById(id);
//     res.status(200).json(book);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/books", async (req, res) => {
//   try {
//     const book = await Book.create(req.body);
//     res.status(200).json(book);
//   } catch (error) {
//     req.status(500).json({ message: error.message });
//   }
// });

// app.put("/api/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findByIdAndUpdate(id, req.body);
//     if (!book) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     const updatedBook = await Book.findById(id);
//     res.status(200).json(updatedBook);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.delete("/api/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findByIdAndDelete(id);

//     if (!book) {
//       return res.status(404).json({ message: "Product Not Found" });
//     }
//     res.status(200).json({ message: "Product has been deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://shettypratiksha049:mHpQmclsOtluRfl5@backend.pznjvrv.mongodb.net/CredenceAPi?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
