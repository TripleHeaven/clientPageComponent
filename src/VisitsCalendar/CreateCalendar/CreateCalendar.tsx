import React from 'react';
import styles from './CreateCalendar.css';
import { VisitT } from '../../TypesTS/VisitT';
import { DayT } from '../../TypesTS/DayT';
import Day from '../Day/Day';
export default function CreateCalendar({
  monthNumber,
  visits
}: {
  monthNumber: number;
  visits: VisitT[];
}) {
  let sDays = 0;
  const numToMonthA: { [key: number]: string } = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December '
  };
  const visitDates = [];
  for (let i = 0; i < visits.length; i++) {
    visitDates.push(visits[i].date);
  }
  function isSpecialDay(date: Date, visitDates: Array<Date>) {
    for (let l = 0; l < visitDates.length; l++) {
      if (
        visitDates[l].getDate() === date.getDate() &&
        visitDates[l].getMonth() === date.getMonth()
      ) {
        return true;
      }
    }
    return false;
  }
  function getDay(date: Date) {
    let day = date.getDay();
    if (day === 0) {
      day = 7;
    }
    return day - 1;
  }
  const mon = monthNumber;
  const d = new Date(2020, monthNumber, 1);
  const thisMonthDays: Array<DayT> = [];
  for (let i = 0; i < getDay(d); i++) {
    thisMonthDays.push({ dayNum: '', stateThing: 'none' });
  }
  while (d.getMonth() === mon) {
    if (isSpecialDay(d, visitDates) === true) {
      sDays += 1;
      thisMonthDays.push({
        dayNum: d.getDate().toString(),
        stateThing: 'special'
      });
    } else {
      thisMonthDays.push({
        dayNum: d.getDate().toString(),
        stateThing: 'regular'
      });
    }
    d.setDate(d.getDate() + 1);
  }
  if (getDay(d) !== 0) {
    for (let i = getDay(d); i < 7; i++) {
      thisMonthDays.push({ dayNum: '', stateThing: 'none' });
    }
  }
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.month}>
        {numToMonthA[mon]} {sDays} Visits
      </div>
      <div className={styles.calendarDays}>
        <p>m</p>
        <p>t</p>
        <p>w</p>
        <p>t</p>
        <p>f</p>
        <p>s</p>
        <p>s</p>
      </div>
      <div className={styles.calDays}>
        {thisMonthDays.map((ddd, index) => (
          <Day day={ddd} key={index} />
        ))}
      </div>
    </div>
  );
}
