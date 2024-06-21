import React from 'react';
import styles from './Loader.module.css';
import loader from './Assets/loaderImg.gif';

const Loader = () => {
  return (
    <div className={`${styles.loader}`}>
      <img className={styles.loaderImg} src={loader} alt='Loading...'/>
    </div>
  )
}

export default Loader
