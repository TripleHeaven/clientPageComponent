import React, { useState } from "react";
import { render } from "react-dom";
import { register } from "./serviceWorker";
import BasicInformation from "./BasicInformation/BasicInformation";
import Visits from "./Visits/Visits";
import styles from "./index.css";
import Abo from "./Abo/Abo";
import { ClientT } from "./TypesTS/ClientT";
import { VisitT } from "./TypesTS/VisitT";
import { AboT } from "./TypesTS/AboT";
// here we disable console and performance for better production experience
// console.log(process.env.NODE_ENV);
// if (!process || !process.env || process.env.NODE_ENV !== "development") {
//   performance.mark = () => undefined as any;
//   performance.measure = () => undefined as any;
//   console.log = () => undefined as any;
// }

export default function App() {
  const testClient: ClientT = {
    name: "Maria Johnson",
    phone: "+49 176 256 32321",
    email: "info@info.com",
    adress: "Paginton Street",
    gender: "Male",
    age: 31,
    visits: [],
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
    <div className={styles.container}>
      <BasicInformation client={testClient}></BasicInformation>
      <Visits visits={testVisits}></Visits>
      <Abo abo={testAbo}></Abo>
    </div>
  );
}

render(<App />, document.getElementById("root"));

register();
