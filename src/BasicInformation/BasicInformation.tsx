import React from "react";
import styles from "./BasicInformation.css";
import { ClientT } from "../TypesTS/ClientT";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function BasicInformation({ client }: { client: ClientT }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.mainTitle}>Basic information</p>
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
              <FontAwesomeIcon
                icon={faPhone}
                color="#0047FF"
                flip="horizontal"
              />
              <text>Phone</text>
            </div>
            <div className={styles.param}>{client.phone}</div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.categoryName}>
              <FontAwesomeIcon icon={faVenusMars} color="#0047FF" />
              <text>Gender</text>
            </div>
            <div className={styles.param}>{client.gender}</div>
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.infoLevel}>
          <div className={styles.infoLeft}>
            <div className={styles.categoryName}>
              <FontAwesomeIcon icon={faAt} color="#0047FF"></FontAwesomeIcon>
              <text>Email</text>
            </div>
            <div className={styles.param}>{client.email}</div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.categoryName}>
              <FontAwesomeIcon icon={faCalendar} color="#0047FF" />
              <text>Age</text>
            </div>
            <div className={styles.param}>{client.age}</div>
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.infoLevel}>
          <div className={styles.infoLeft}>
            <div className={styles.categoryName}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                color="#0047FF"
                flip="horizontal"
              />
              <text>Adress</text>
            </div>
            <div className={styles.param}>{client.adress}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
