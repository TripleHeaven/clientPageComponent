import React from "react";
import styles from "./CreateCalendar.css";
import { VisitT } from "../../TypesTS/VisitT";
import { DayT } from "../../TypesTS/DayT";
import Day from "../Day/Day";
export default function CreateCalendar({
  monthNumber,
  visits,
}: {
  monthNumber: number;
  visits: VisitT[];
}) {
  let sDays = 0;
  const numToMonthA: { [key: number]: string } = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December ",
  };
  function getDateFromDate(dateA: Date) {
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

    return {
      dayMonth: dateA.getDate(),
      monthNumber: dateA.getMonth() + 1,
      year: dateA.getFullYear,
    };
  }
  let visitDates = [];
  for (let i = 0; i < visits.length; i++) {
    visitDates.push(getDateFromDate(visits[i].date));
  }

  function isSpecialDay(date, visitDates) {
    for (let l = 0; l < visitDates.length; l++) {
      if (
        visitDates[l].dayMonth === date.getDate() &&
        visitDates[l].monthNumber === date.getMonth()
      ) {
        return true;
      }
    }

    return false;
  }

  // =================================================================================================================
  function getDay(date: Date) {
    // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();

    if (day === 0) {
      day = 7;
    } // сделать воскресенье (0) последним днем
    return day - 1;
  }
  let mon = monthNumber; // месяцы в JS идут от 0 до 11, а не от 1 до 12
  let d = new Date(2020, monthNumber, 1);
  // пробелы для первого ряда
  // с понедельника до первого дня месяца
  // * * * 1  2  3  4
  const thisMonthDays: Array<DayT> = [];
  for (let i = 0; i < getDay(d); i++) {
    thisMonthDays.push({ dayNum: "", stateThing: "none" });
  }
  // <td> ячейки календаря с датами
  while (d.getMonth() === mon) {
    if (isSpecialDay(d, visitDates) === true) {
      sDays += 1;
      thisMonthDays.push({
        dayNum: d.getDate().toString(),
        stateThing: "special",
      });
    } else {
      thisMonthDays.push({
        dayNum: d.getDate().toString(),
        stateThing: "regular",
      });
    }
    d.setDate(d.getDate() + 1);
  }
  // добить таблицу пустыми ячейками, если нужно
  // 29 30 31 * * * *
  if (getDay(d) !== 0) {
    for (let i = getDay(d); i < 7; i++) {
      thisMonthDays.push({ dayNum: "", stateThing: "none" });
    }
  }

  // =================================================================================================================
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
