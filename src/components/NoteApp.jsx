import React from "react";
import { useState } from "react";
import {getInitialData, showFormattedDate} from './../utils/index'

export default function NoteApp() {
    const [listNote, setListNote] = useState(getInitialData());
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const maxTitle = 50;
    
    function onSubmit(e) {
        e.preventDefault();

        const newListNote = {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: showFormattedDate(new Date()),
            archived: false,
        };

        setListNote([...listNote, newListNote])
        console.table(listNote);

        setTitle('');
        setBody('');
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
                title={title}
                body={body}
                maxTitle={maxTitle}
                handleTitleChange={handleTitleChange}
                handleBodyChange={handleBodyChange}
                onChangeSubmit={onSubmit}
            />
            <DisplayNote listNote={listNote} setListNote={setListNote}/>
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
            <form onSubmit={onChangeSubmit} >
                <h2>Buat catatan</h2>
                <h3>SIsa karakter : {maxTitle - title.length}</h3>
                <input
                    type="text"
                    id="judul"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Masukan judul..."
                />
                <textarea
                    cols="30"
                    rows="10"
                    id="note-field"
                    value={body}
                    onChange={handleBodyChange}
                    placeholder="Masukan catatan..."
                ></textarea>
                <input
                    type="submit"
                    value="Simpan"
                />
            </form>
        </div>
    );
}

function DisplayNote({listNote, setListNote}) {
    const handleNoteDelete = (id) => {
        const updateedNotes = listNote.filter(note => note.id !== id);
        setListNote(updateedNotes);
    }
    const renderNotes = () => {
        
        if (listNote.length === 0) {
            return <p id="notif">Tidak ada catatan/Catatan tidak ditemukan</p>
        } else {
        return listNote.map(note =>
            <article key={note.id}>
                <h2>{note.title}</h2>
                <span>{note.createdAt}</span>
                <p>{note.body}</p>
                <button onClick={() => handleNoteDelete(note.id)}>Delete</button>
            </article>
            );
        }
    };
    
    return (
        <>
        <h2>Catatan Aktif</h2>
        <div className="note-list">
            {renderNotes()}
        </div>
        </>
    );
}