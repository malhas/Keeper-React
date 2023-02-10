import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, appendNote] = useState([]);

    function addNote(newNote) {
        appendNote((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        appendNote((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea insert={addNote} />
            {notes.map((item, index) => (
                <Note
                    key={index}
                    id={index}
                    title={item.title}
                    content={item.content}
                    delete={deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
