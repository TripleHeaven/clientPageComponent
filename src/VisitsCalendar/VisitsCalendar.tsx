import React from "react";
import styles from "./VisitsCalendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { VisitT } from "../TypesTS/VisitT";
import CreateCalendar from "./CreateCalendar";
import { useState } from "react";

export default function VisitsCalendar({ visits }: { visits: VisitT[] }) {
  const [months, setMonth] = useState(0);
  let curIndex = 0;
  function changeMonth(index: number) {
    curIndex = months + index * 3;
    setMonth(curIndex);
    console.log(months);
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.mainTitle}>Visits calendar</p>
        <div className={styles.titleButtons}>
          <p className={styles.titleButtonS}>Show Months</p>
          <div className={styles.titleButton} onClick={() => changeMonth(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} color="#0047FF" />
            <p>Previouts period</p>
          </div>
          <div className={styles.titleButtonN} onClick={() => changeMonth(1)}>
            <p>Next period</p>
            <FontAwesomeIcon
              icon={faArrowLeft}
              flip="horizontal"
              color="#0047FF"
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.threeDots}>
          <div className={styles.tdContainer}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      </div>
      <div className={styles.calendarContainer}>
        <CreateCalendar monthNumber={months} visits={visits}></CreateCalendar>
        <CreateCalendar
          monthNumber={months + 1}
          visits={visits}
        ></CreateCalendar>
        <CreateCalendar
          monthNumber={months + 2}
          visits={visits}
        ></CreateCalendar>
      </div>
    </div>
  );
}
