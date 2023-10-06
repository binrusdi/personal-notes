import React from "react";
import { useState } from "react";
import {getInitialData, showFormattedDate} from './../utils/index'

export default function DisplayNote() {
    const [artikel, setArtikel] = useState(getInitialData());

    return (
        <div className="app-note__display-body">
            {artikel.map(art=>(
            <article className="app-note__display-artikel" key={art.id}>
                <h2>{art.title}</h2>
                <span>{showFormattedDate(art.createdAt)}</span>
                <p>{art.body}</p>
                    <MyButton value={art.archived} />
            </article>
            ))}
        </div>
    );
}

function MyButton() {
    return (
        <div className="app-note__btn-artikel">
            <button>Delete</button>
            <button>Arsip</button>
        </div>
    );
}