import React, { useState } from "react";
import { render } from "react-dom";
import { register } from "./serviceWorker";
import BasicInformation from "./BasicInformation/BasicInformation";
import styles from "./index.css";
import { ClientT } from "./TypesTS/ClientT";
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
  };
  return (
    <div className={styles.container}>
      <BasicInformation client={testClient}></BasicInformation>
    </div>
  );
}

render(<App />, document.getElementById("root"));

register();
