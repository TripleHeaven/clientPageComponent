import React from 'react';
import styles from './Activity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function Activity() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.mainTitle}>Activity</p>
        <div className={styles.threeDots}>
          <div className={styles.tdContainer}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      </div>
      <div className={styles.panelContainer}>
        <div className={styles.panelEl1}>
          All
          <div className={styles.curLine}></div>
        </div>
        <div className={styles.panelEl2}>
          Phone Calls
          <div className={styles.curLine}></div>
        </div>
        <div className={styles.panelEl3}>
          Abos
          <div className={styles.curLine}></div>
        </div>
        <div className={styles.panelEl4}>
          Visits
          <div className={styles.curLine}></div>
        </div>
      </div>
      <div className={styles.titleOfThings}>
        <div className={styles.titleOfThing1}>Type</div>
        <div className={styles.titleOfThing2}>Date</div>
        <div className={styles.titleOfThing3}>Description</div>
        <div className={styles.titleOfThing4}>Agent</div>
      </div>
      <div className={styles.activityContainer}>
        <div className={styles.activity}>
          <div className={styles.type}>
            <FontAwesomeIcon icon={faClock} color="grey" />
            Visit
          </div>
          <div className={styles.date}>15 Aug 2020</div>
          <div className={styles.desc}>Fitcurves</div>
          <div className={styles.agent}>Angela Fitzpartrick</div>
        </div>
        <div className={styles.activity}>
          <div className={styles.type}>
            <FontAwesomeIcon icon={faClock} color="grey" />
            Visit
          </div>
          <div className={styles.date}>15 Aug 2020</div>
          <div className={styles.desc}>Fitcurves</div>
          <div className={styles.agent}>Angela Fitzpartrick</div>
        </div>
        <div className={styles.activity}>
          <div className={styles.type}>
            <FontAwesomeIcon icon={faClock} color="grey" />
            Visit
          </div>
          <div className={styles.date}>15 Aug 2020</div>
          <div className={styles.desc}>Fitcurves</div>
          <div className={styles.agent}>Angela Fitzpartrick</div>
        </div>
      </div>
    </div>
  );
}
