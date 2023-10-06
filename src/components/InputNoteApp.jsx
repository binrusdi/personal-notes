import React from "react";
import { useState } from "react";

export default function InputNote() {
    return (
        <div className="app-note__input-body">
            <InputNoteApp />
        </div>
    );
}

function InputNoteApp() {
    return (
        <div className="app-note__input">
            <h2>Buat catatan</h2>
            <span>Sisa karakter : </span>
            <input type="text" placeholder="Judul..." />
            <textarea></textarea>
        </div>
    );
}