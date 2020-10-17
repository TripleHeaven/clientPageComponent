import React from "react";
import styles from "./Notes.css";
import { ClientT } from "../TypesTS/ClientT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { NoteT } from "../TypesTS/NoteT";

export default function Notes({ notes }: { notes: NoteT[] }) {
  function getDateFromDate(date: Date) {
    const numToMonth: { [key: number]: string } = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
    let returnString = "";
    returnString +=
      date.getDate().toString() +
      " " +
      numToMonth[date.getMonth()] +
      " " +
      date.getFullYear().toString();
    return returnString;
  }
  function sortByDate() {
    notes.sort((a, b) => {
      return Number(a.date) - Number(b.date);
    });
  }
  // const addNewNote = (noteId: number) => {};
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.mainTitle}>Notes</p>
      </div>
      <div className={styles.infoLevel}>
        <div className={styles.addNewNoteButton}>+ Add new note</div>
      </div>
      <div className={styles.notesContainer}>
        <div className={styles.noteInfo}>
          <div className={styles.noteDate}>
            {getDateFromDate(notes[0].date)}
          </div>
          <div className={styles.noteAuthor}>{notes[0].redactor}</div>
        </div>
        <div className={styles.noteText}>
          <p>{notes[0].noteText}</p>
          <div className={styles.threeDots}>
            <div className={styles.tdContainer}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        </div>
        <div className={styles.noteInfo}>
          <div className={styles.noteDate}>
            {getDateFromDate(notes[1].date)}
          </div>
          <div className={styles.noteAuthor}>{notes[1].redactor}</div>
        </div>
        <div className={styles.noteText}>
          <p>{notes[1].noteText}</p>
          <div className={styles.threeDots}>
            <div className={styles.tdContainer}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
