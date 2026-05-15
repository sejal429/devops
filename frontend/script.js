const API = "http://YOUR_EC2_IP:5000";
async function loadNotes() {
const response = await fetch(`${API}/notes`);
const notes = await response.json();
const list = document.getElementById("notesList");
list.innerHTML = "";
notes.forEach((note, index) => {
const li = document.createElement("li");
li.innerHTML = `
${note}
<button onclick="deleteNote(${index})">Delete</button>
`;
list.appendChild(li);
});
}
async function addNote() {
const note = document.getElementById("noteInput").value;
await fetch(`${API}/notes`, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ note })
});
loadNotes();
}
}
async function deleteNote(id) {
await fetch(`${API}/notes/${id}`, {
method: "DELETE"
});
loadNotes();
}
loadNotes();