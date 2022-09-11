import React from 'react'
import styles from "./styles.module.css";

const Avatar = ({ icon, heading, title }) => {
  return (
    <div className={styles.avatar}>
      <img src={icon} alt="icon" />
      <div>
        <p className={styles.title}>{heading}</p>
        <p className={styles.subtitle}>{title}</p>
      </div>
    </div>
  )
}
export default Avatar