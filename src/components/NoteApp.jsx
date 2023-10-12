import React from "react";
import { useState } from "react";
import {getInitialData, showFormattedDate} from './../utils/index'

export default function NoteApp() {
    const [listNote, setListNote] = useState(getInitialData());
    const [title, setTitle] = useState(getInitialData);
    const [body, setBody] = useState('');
    const maxTitle = 30;
    
    function onSubmit(e) {
        e.preventDefault();

        const newListNote = {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: new Date().toISOString(),
            archived: false,
        };

        setListNote([...listNote, ...newListNote])

    }
    function handleTitleChange(e) {
        const inputValue = e.target.value;
        if (inputValue.length <= maxTitle) {
            
            setTitle(inputValue);

        }
    }

    function handleBodyChange(e) {
        setBody(e.target.value);
    }
    return (
        <div className="container">
            <Header />
            <InputNote
                handleTitleChange={handleTitleChange}
                handleBodyChange={handleBodyChange}
                onChangeSubmit={onSubmit}
                maxTitle={maxTitle}
            />
            <DisplayNote listNote={listNote}/>
        </div>
    );
}


function Header() {
    return (
    <div className="note__header">
        <h1>Buat Catatan</h1>
        <div className="search">    
            <input type="text" placeholder="Masukan catatan..." />
            <ButtonSearch />
        </div>
    </div>
    );
}

function ButtonSearch() {
    return (
        <button id="btn-search">Cari Catatan</button>
    );
}

function InputNote({title, body , maxTitle, handleTitleChange, handleBodyChange, onChangeSubmit}) {
    return (
        <div className="note-input">
            <form>
                <h2>Buat catatan</h2>
                <h3>SIsa karakter : {maxTitle}</h3>
                <input
                    type="text"
                    id="judul"
                    value={title}
                    onChange={handleTitleChange}
                />
                <textarea
                    cols="30"
                    rows="10"
                    id="note-field"
                    value={body}
                    onChange={handleBodyChange}
                ></textarea>
                <input
                    type="submit"
                    value="Simpan"
                    onClick={onChangeSubmit}
                />
            </form>
        </div>
    );
}

function DisplayNote({listNote}) {
    
    const notes = listNote.map(note =>
        <article key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <span>{note.createdAt}</span>
        </article>
    );

    return <div className="note-list">{notes}</div>;
}