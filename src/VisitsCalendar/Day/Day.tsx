import React from 'react';
import styles from './Day.css';
import { DayT } from '../../TypesTS/DayT';

export default function Day({ day }: { day: DayT }) {
  const visibility: { [key: string]: string } = {
    a: styles.regular,
    b: styles.none,
    c: styles.special
  };
  let v = 'a';
  if (day.stateThing === 'none') {
    v = 'b';
  } else if (day.stateThing === 'regular') {
    v = 'a';
  } else if (day.stateThing === 'special') {
    v = 'c';
  }
  return <div className={visibility[v]}>{day.dayNum}</div>;
}
