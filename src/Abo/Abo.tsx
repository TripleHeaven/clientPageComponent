import React from "react";
import styles from "./Abo.css";
import { AboT } from "../TypesTS/AboT";
export default function Abo({ abo }: { abo: AboT }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.mainTitle}>Abo</p>
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
              <text>Active abo</text>
            </div>
            <div className={styles.param}>{abo.active}</div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.categoryName}>
              <text>Registred</text>
            </div>
            <div className={styles.param}>{abo.registred}</div>
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.infoLevel}>
          <div className={styles.infoLeft}>
            <div className={styles.categoryName}>
              <text>Status</text>
            </div>
            <div className={styles.param}>{abo.status}</div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.categoryName}>
              <text>Active from</text>
            </div>
            <div className={styles.param}>{abo.activeFrom}</div>
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.infoLevel}>
          <div className={styles.infoLeft}>
            <div className={styles.categoryName}>
              <text>Visits left</text>
            </div>
            <div className={styles.param}>{abo.visitsLeft}</div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.categoryName}>
              <text>Active till</text>
            </div>
            <div className={styles.param}>{abo.activeTill}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
