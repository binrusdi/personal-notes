import React from "react";
import { useState } from "react";
import { getInitialData, showFormattedDate } from "../utils";

export default function InputNote() {
    return (
        <div className="app-note__input-body">
            <InputNoteApp />
        </div>
    );
}

function InputNoteApp() {
    
    const [notes, setNote] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const maxtitle = 30

    const handleTitleChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= maxtitle) {
            setTitle(inputValue.charAt(0).toUpperCase()+ inputValue.slice(1).toLoweCase())
        }
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    
    const handleNoteSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            id: getInitialData().length + 1,
            title,
            body: content,
            createdAt: new Date().toISOString(),
            archived: false,
        };

        setNote = [...getInitialData(), newNote];

        setTitle('');
        setContent('');

        alert("Data sudah ditambahkan");
    };
    return (
        <div className="app-note__input">
            <h2>Buat catatan</h2>
            <span>Sisa karakter : {maxtitle - title.length}</span>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Judul..."
            />
            <textarea
                value={content}
                onChange={handleContentChange}
                placeholder="Isi catatan..."
            ></textarea>
            <input type="submit" value="Tulis" onClick={handleNoteSubmit}/>
        </div>
    );
}