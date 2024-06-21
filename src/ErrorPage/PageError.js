import React from 'react';
import Error from './ErrorAssets/Error.jpeg';
import styles from './PageError.module.css';

const PageError = () => {
  return (
    <div>
      <div className={styles.erroContainer}>
        <img src={Error} alt='Something Wend Wrong....'/>
      </div>
    </div>
  )
}

export default PageError
