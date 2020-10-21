import React from 'react';
import styles from './Visits.css';
import { VisitT } from '../TypesTS/VisitT';

export default function Visits({ visits }: { visits: VisitT[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.mainTitle}>Visits</p>
        <div className={styles.threeDots}>
          <div className={styles.tdContainer}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      </div>
      <div className={styles.clientInfo}>
        <div className={styles.infoLevel}>
          <div className={styles.infoLeft}>
            <div className={styles.categoryName}>
              <p>Last Visit</p>
            </div>
            <div className={styles.param}>n/a</div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.categoryName}>
              <p>Total visits</p>
            </div>
            <div className={styles.param}>{visits.length}</div>
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.infoLevel}>
          <div className={styles.infoLeft}>
            <div className={styles.categoryName}>
              <p>First visit </p>
            </div>
            <div className={styles.param}>n/a</div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.categoryName}>
              <p>Client since</p>
            </div>
            <div className={styles.param}>15 Sep 2018</div>
          </div>
        </div>
      </div>
    </div>
  );
}
