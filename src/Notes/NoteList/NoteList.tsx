import React, { useContext, useState } from 'react';
import styles from './NoteList.css';
import { Context } from '../../context';
import { NoteT } from '../../TypesTS/NoteT';

export default function NoteList(note: NoteT) {
  const [isvisible, setVisible] = useState({
    visible: false,
    menu: styles.limenuClose
  });
  const toggleVisibility = () => {
    setVisible({
      visible: !isvisible.visible,
      menu: isvisible.visible ? styles.limenuClose : styles.limenuOpen
    });
  };
  const [isvisibleNote, setVisibleNote] = useState({
    visible: false,
    noteDoneStyle: styles.noteTextOpen,
    noteEditStyle: styles.noteEditClosed
  });
  const toggleVisibilityNote = () => {
    setVisibleNote({
      visible: !isvisibleNote.visible,
      noteDoneStyle: isvisibleNote.visible
        ? styles.noteTextOpen
        : styles.noteTextClosed,
      noteEditStyle: isvisibleNote.visible
        ? styles.noteEditClosed
        : styles.noteEditOpen
    });
  };
  // const [noteText, setNoteText] = useState({
  //   noteId: note.noteId,
  //   redactor: note.redactor,
  //   date: note.date,
  //   noteText: note.noteText,
  // });

  function getDateFromDate(date: Date) {
    const numToMonth: { [key: number]: string } = {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec'
    };
    let returnString = '';
    returnString +=
      date.getDate().toString() +
      ' ' +
      numToMonth[date.getMonth()] +
      ' ' +
      date.getFullYear().toString();
    return returnString;
  }
  const [savedText, setNewText] = useState(note.noteText);
  const { removeNote, changeNote } = useContext(Context);
  return (
    <div>
      <div className={styles.noteInfo}>
        <div className={styles.noteDate}>{getDateFromDate(note.date)}</div>
        <div className={styles.noteAuthor}>{note.redactor}</div>
      </div>
      <div className={isvisibleNote.noteDoneStyle}>
        <p>{note.noteText}</p>
        <div className={styles.threeDots} onClick={() => toggleVisibility()}>
          <div className={styles.tdContainer}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <ul className={isvisible.menu}>
            <li onClick={() => toggleVisibilityNote()}>Edit</li>
            <li onClick={() => removeNote(note.noteId)}>Delete</li>
          </ul>
        </div>
      </div>
      <div className={isvisibleNote.noteEditStyle}>
        <textarea
          value={savedText}
          onChange={event => setNewText(event.target.value)}
        ></textarea>
        <div className={styles.buttonsE}>
          <button
            onClick={() => {
              changeNote(note.noteId, savedText);
              toggleVisibilityNote();
            }}
          >
            Save
          </button>
          <button onClick={() => toggleVisibilityNote()}>Cancel</button>
        </div>
      </div>
      <div className={styles.noteEdit}></div>
    </div>
  );
}
