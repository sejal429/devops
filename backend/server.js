const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let notes = [];
app.get("/notes", (req, res) => {
res.json(notes);
});
app.post("/notes", (req, res) => {
const note = req.body.note;
notes.push(note);
res.json({ message: "Note Added" });
});
app.delete("/notes/:id", (req, res) => {
notes.splice(req.params.id, 1);
res.json({ message: "Note Deleted" });
});
app.listen(5000, () => {
4
console.log("Server running on port 5000");
});