import React from 'react';
import styles from './VisitsCalendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { VisitT } from '../TypesTS/VisitT';
import CreateCalendar from './CreateCalendar';
import { useState } from 'react';

export default function VisitsCalendar({ visits }: { visits: VisitT[] }) {
  const [months, setMonth] = useState({
    months: 0,
    years: 2020
  });
  let curIndex = 0;
  let curYear = months.years;
  function changeMonth(index: number) {
    if (index > 0 && months.months + 3 > 11) {
      curYear = months.years + 1;
      curIndex = 0;
    } else if (index < 0 && months.months - 3 < 0) {
      curYear = months.years - 1;
      curIndex = 9;
    } else {
      curIndex = months.months + index * 3;
    }
    setMonth({
      months: curIndex,
      years: curYear
    });
    console.log(months);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.mainTitle}>Visits calendar</p>
        <div className={styles.titleButtons}>
          <p className={styles.titleButtonS}>Show Months</p>
          <div className={styles.titleButton} onClick={() => changeMonth(-1)}>
            <div className={styles.arrowI}>
              <FontAwesomeIcon icon={faArrowLeft} color="rgba(0, 0, 0, 0.4)" />
            </div>
            <p>Previouts period</p>
          </div>
          <div className={styles.titleButtonN} onClick={() => changeMonth(1)}>
            <p>Next period</p>
            <div className={styles.arrowN}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                flip="horizontal"
                color="rgba(0, 0, 0, 0.4)"
              ></FontAwesomeIcon>
            </div>
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
        <CreateCalendar
          yearNumber={months.years}
          monthNumber={months.months}
          visits={visits}
        ></CreateCalendar>
        <CreateCalendar
          yearNumber={months.years}
          monthNumber={months.months + 1}
          visits={visits}
        ></CreateCalendar>
        <CreateCalendar
          yearNumber={months.years}
          monthNumber={months.months + 2}
          visits={visits}
        ></CreateCalendar>
      </div>
    </div>
  );
}
