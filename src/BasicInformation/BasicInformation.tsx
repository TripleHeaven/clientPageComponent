import React from 'react';
import styles from './BasicInformation.css';
import { ClientT } from '../TypesTS/ClientT';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

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
              <div className={styles.iconF}>
                <FontAwesomeIcon
                  icon={faPhone}
                  color="rgba(0, 0, 0, 0.4)"
                  flip="horizontal"
                  size="sm"
                />
              </div>
              <p>Phone</p>
            </div>
            <div className={styles.param}>{client.phone}</div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.categoryName}>
              <FontAwesomeIcon icon={faVenusMars} color="rgba(0, 0, 0, 0.4)" />
              <p>Gender</p>
            </div>
            <div className={styles.param}>{client.gender}</div>
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.infoLevel}>
          <div className={styles.infoLeft}>
            <div className={styles.categoryName}>
              <div className={styles.iconAt}>
                <FontAwesomeIcon
                  icon={faAt}
                  color="rgba(0, 0, 0, 0.4)"
                ></FontAwesomeIcon>
              </div>
              <p>Email</p>
            </div>
            <div className={styles.param}>{client.email}</div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.categoryName}>
              <div className={styles.iconAge}>
                <FontAwesomeIcon icon={faCalendar} color="rgba(0, 0, 0, 0.4)" />
              </div>
              <p>Age</p>
            </div>
            <div className={styles.param}>{client.age}</div>
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.infoLevel}>
          <div className={styles.infoLeft}>
            <div className={styles.categoryName}>
              <div className={styles.iconMarker}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color="rgba(0, 0, 0, 0.4)"
                  flip="horizontal"
                />
              </div>
              <p>Adress</p>
            </div>
            <div className={styles.param}>{client.adress}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
