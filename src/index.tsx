import React, { useState } from "react";
import { render } from "react-dom";
import { register } from "./serviceWorker";
import BasicInformation from "./BasicInformation/BasicInformation";
import Visits from "./Visits/Visits";
import styles from "./index.css";
import Abo from "./Abo/Abo";
import Notes from "./Notes/Notes";
import { ClientT } from "./TypesTS/ClientT";
import { VisitT } from "./TypesTS/VisitT";
import { AboT } from "./TypesTS/AboT";
import { NoteT } from "./TypesTS/NoteT";
import { Context } from "./context";
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
      testNotes.filter((note) => {
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
      redactor: "Strffan Janoski",
      date: new Date(2020, 3, 15, 2, 3),
      noteText:
        "fkjaskldfjldskfjlksdfjlasdkfjdl fdsjakfjdlsakfjlfjaslkdjflk;sdaj lkjfdaslkfjdslak;fjdsalkfjksdlk;a lkdasfjl;dksafjld;ksa jldkfasjfl;kdsajfl;kdsajfl;ksd",
    },
    {
      noteId: Date.now() + 15,
      redactor: "Lev Balaguroff",
      date: new Date(2019, 3, 15, 2, 3),
      noteText:
        "fkjaskldffjafkdjsflkdsajflk dsklafjlsadk;jjldskfjlksdfjlasdkfjdl ffhaskdjfkjs jfsakdfjlksaf jldks;f jld;skaf jldkjsa fdjsakfjl;dksafjlk;dsajflkj ldksafjl;sdakfjlds;kjlfkajsd;flkjs ldask;fjdls;kafjdsla;jfl jldkasfjl;sdkfjlsk",
    },
    {
      noteId: Date.now() + 16,
      redactor: "Lev Buroff",
      date: new Date(2019, 5, 15, 2, 3),
      noteText:
        "fkjaskldffjafkdjsflfksajflkdj sl;fsadjfklsdfj l;kdjasfl;kdjflfkdsafjd;laskfjd;lsk j;ldasfkkdsajflk dsklafjlsadk;jjldskfjlksdfjlasdkfjdl ffhaskdjfkjs jfsakdfjlksaf jldks;f jld;skaf jldkjsa fdjsakfjl;dksafjlk;dsajflkj ldksafjl;sdakfjlds;kjlfkajsd;flkjs ldask;fjdls;kafjdsla;jfl jldkasfjl;sdkfjlsk",
    },
  ]);

  const changeNote = (noteId: number, text: string) => {
    for (let i = 0; i < testNotes.length; i++) {
      if (noteId === testNotes[i].noteId) {
        //
        const newNote = testNotes[i];
        newNote.date = new Date(Date.now());
        newNote.noteText = text;
        setNotes([
          ...testNotes.filter((item) => {
            return item.noteId !== noteId;
          }),
          newNote,
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
        redactor: "Client",
        date: new Date(Date.now()),
        noteText: text,
      },
    ]);
    sortByDate();
  };

  const testClient: ClientT = {
    name: "Maria Johnson",
    phone: "+49 176 256 32321",
    email: "info@info.com",
    adress: "Paginton Street",
    gender: "Male",
    age: 31,
    visits: [],
    notes: testNotes,
  };
  const testVisits: VisitT[] = [
    {
      date: "17 Aug 2020",
    },
    { date: "22 Aug 2020" },
  ];
  const testAbo: AboT = {
    active: "DayTime",
    status: "Expired on 20 Oct",
    visitsLeft: "23",
    registred: "17 Aug 2020",
    activeFrom: "17 Aug 2020",
    activeTill: "23 Oct 2020",
  };
  return (
    <Context.Provider
      value={{
        removeNote,
        addNote,
        changeNote,
      }}
    >
      <div className={styles.container}>
        <BasicInformation client={testClient}></BasicInformation>
        <Visits visits={testVisits}></Visits>
        <Abo abo={testAbo}></Abo>
        <Notes notes={testNotes}></Notes>
      </div>
    </Context.Provider>
  );
}

render(<App />, document.getElementById("root"));

register();
