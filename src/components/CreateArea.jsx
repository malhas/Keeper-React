import React, { useState } from "react";

function CreateArea(props) {
    const [note, insertNote] = useState({ title: "", content: "" });

    function handleNote(event) {
        const { name, value } = event.target;
        insertNote((prevNote) => {
            return { ...prevNote, [name]: value };
        });
    }

    function addNote(event) {
        props.insert(note);
        insertNote({ title: "", content: "" });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    onChange={handleNote}
                    name="title"
                    placeholder="Title"
                    value={note.title}
                />
                <textarea
                    onChange={handleNote}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                />
                <button onClick={addNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
