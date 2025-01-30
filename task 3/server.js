const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let items = []; // In-memory database (Replace with DB if needed)
let idCounter = 1;

// **CREATE (POST)**
app.post("/items", (req, res) => {
    const newItem = { id: idCounter++, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
});

// **READ (GET)**
app.get("/items", (req, res) => {
    res.json(items);
});

// **UPDATE (PUT)**
app.put("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);
    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

// **DELETE (DELETE)**
app.delete("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    items = items.filter(item => item.id !== id);
    res.json({ message: "Item deleted" });
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));