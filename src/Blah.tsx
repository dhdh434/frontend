import React from 'react';
import styles from './Blah.module.css';

function TopBanner({ saying }: any) {
  return (
    <>
      <div>
        <div className="col-2">
          <img src="./logo192.png" alt="companyLogo" />
        </div>

        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
