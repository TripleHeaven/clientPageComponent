import React, { useContext, useState } from "react";
import styles from "./Notes.css";
import { NoteT } from "../TypesTS/NoteT";
import NoteList from "./NoteList/NoteList";
import { Context } from "../context";
export default function Notes({ notes }: { notes: NoteT[] }) {
  const { addNote } = useContext(Context);
  const [newNoteText, setText] = useState("");
  const [isvisible, setVisible] = useState({
    visible: true,
    menu: styles.limenuClose,
  });
  const toggleVisibility = () => {
    setVisible({
      visible: !isvisible.visible,
      menu: isvisible.visible
        ? styles.createContainerOpen
        : styles.createContainerClosed,
    });
  };
  function sortByDate() {
    notes.sort((a, b) => {
      return Number(a.date) - Number(b.date);
    });
  }
  sortByDate();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.mainTitle}>Notes</p>
      </div>
      <div
        className={styles.addNewNoteButton}
        onClick={() => toggleVisibility()}
      >
        +Add new note
      </div>

      <div className={styles.notesContainer}>
        <div className={isvisible.menu}>
          <textarea
            className={styles.tbForCreate}
            onChange={(event) => setText(event.target.value)}
          ></textarea>
          <div className={styles.buttonSection}>
            <button
              onClick={() => {
                addNote(newNoteText);
                toggleVisibility();
              }}
            >
              {" "}
              Add{" "}
            </button>
            <button onClick={() => toggleVisibility()}> Cancel</button>
          </div>
        </div>
        {notes.map((item, index) => (
          <NoteList key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
