import React, { useState } from 'react';
import { render } from 'react-dom';
import { register } from './serviceWorker';
import BasicInformation from './BasicInformation/BasicInformation';
import Visits from './Visits/Visits';
import styles from './index.css';
import Abo from './Abo/Abo';
import Notes from './Notes/Notes';
import { ClientT } from './TypesTS/ClientT';
import { VisitT } from './TypesTS/VisitT';
import { AboT } from './TypesTS/AboT';
import { NoteT } from './TypesTS/NoteT';
import { Context } from './context';
import VisitsCalendar from './VisitsCalendar/VisitsCalendar';
import Activity from './Activity/Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
// here we disable console and performance for better production experience
// console.log(process.env.NODE_ENV);
// if (!process || !process.env || process.env.NODE_ENV !== "development") {
//   performance.mark = () => undefined as any;
//   performance.measure = () => undefined as any;
//   console.log = () => undefined as any;
// }

export default function App() {
  const removeNote = (noteId: number) =>
    setNotes(
      testNotes.filter(note => {
        return note.noteId !== noteId;
      })
    );
  function sortByDate() {
    testNotes.sort((a, b) => {
      return Number(a.date) - Number(b.date);
    });
  }
  const [testNotes, setNotes] = useState<NoteT[]>([
    {
      noteId: Date.now(),
      redactor: 'Strffan Janoski',
      date: new Date(2020, 3, 15, 2, 3),
      noteText:
        'Steven Paul Jobs was an American business magnate, industrial designer, investor, and media properietor. He was the chairman, chief executive officer (CEO)'
    },
    {
      noteId: Date.now() + 15,
      redactor: 'Lev Balaguroff',
      date: new Date(2019, 3, 15, 2, 3),
      noteText:
        'Steven Paul Jobs was an American business magnate, industrial designer, investor, and media properietor. He was the chairman, chief executive officer (CEO)'
    },
    {
      noteId: Date.now() + 16,
      redactor: 'Lev Buroff',
      date: new Date(2019, 5, 15, 2, 3),
      noteText:
        'Steven Paul Jobs was an American business magnate, industrial designer, investor, and media properietor. He was the chairman, chief executive officer (CEO)'
    }
  ]);

  const changeNote = (noteId: number, text: string) => {
    for (let i = 0; i < testNotes.length; i++) {
      if (noteId === testNotes[i].noteId) {
        //
        const newNote = testNotes[i];
        newNote.date = new Date(Date.now());
        newNote.noteText = text;
        setNotes([
          ...testNotes.filter(item => {
            return item.noteId !== noteId;
          }),
          newNote
        ]);
        sortByDate();
        return null;
      }
    }
    sortByDate();
    return null;
  };
  const addNote = (text: string) => {
    setNotes([
      ...testNotes,
      {
        noteId: Date.now() + 1,
        redactor: 'Client',
        date: new Date(Date.now()),
        noteText: text
      }
    ]);
    sortByDate();
  };

  const testClient: ClientT = {
    name: 'Maria Johnson',
    phone: '+49 176 256 32321',
    email: 'info@info.com',
    adress: 'Paginton Street',
    gender: 'Male',
    age: 31,
    visits: [],
    notes: testNotes
  };
  const testVisits: VisitT[] = [
    {
      date: new Date(2020, 0, 4)
    },
    { date: new Date(2020, 0, 7) }
  ];
  const testAbo: AboT = {
    active: 'DayTime',
    status: 'Expired on 20 Oct',
    visitsLeft: '23',
    registred: '17 Aug 2020',
    activeFrom: '17 Aug 2020',
    activeTill: '23 Oct 2020'
  };
  return (
    <Context.Provider
      value={{
        removeNote,
        addNote,
        changeNote
      }}
    >
      <div className={styles.container}>
        <div className={styles.button1Pos}>
          <span className={styles.phoneT}>
            <FontAwesomeIcon
              icon={faPhone}
              color="#FFFFFF"
              flip="horizontal"
              size="xs"
            ></FontAwesomeIcon>
          </span>
          <span className={styles.phoneTC}>Call</span>
        </div>
        <div className={styles.button2Pos}>
          <span className={styles.phoneTP}>
            <FontAwesomeIcon
              icon={faDownload}
              color="#5E5E5E"
              flip="horizontal"
              size="xs"
            ></FontAwesomeIcon>
          </span>
          <span className={styles.phoneTCP}>Download pdf</span>
        </div>
        <div className={styles.button3Pos}>
          <span className={styles.phoneTCPF}>
            <div className={styles.threeDots}>
              <div className={styles.tdContainer}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            </div>
          </span>
        </div>
        <div className={styles.titlePos}>
          <div className={styles.clientCircle}></div>
          <div className={styles.clientName}>Maria Johnson</div>
        </div>
        <BasicInformation client={testClient}></BasicInformation>
        <Visits visits={testVisits}></Visits>
        <Abo abo={testAbo}></Abo>
        <Notes notes={testNotes}></Notes>
        <VisitsCalendar visits={testVisits}></VisitsCalendar>
        <Activity></Activity>
      </div>
    </Context.Provider>
  );
}

render(<App />, document.getElementById('root'));

register();
