import React from "react";
import InputNote from "./InputNoteApp";
import DisplayNote from "./DisplayNoteApp";


export default function NoteApp() {
    return (
        <div className="container">
            <Header />
            <InputNote />
            <DisplayNote />
        </div>
    );
}


function Header() {
    return (
    <div className="app-note__header">
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