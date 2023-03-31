import React from 'react';
import styles from './Blah.module.css';

function TopBanner() {
  return (
    <>
      <div>
        <div style={{ textAlign: 'center' }}>
          {/* add an image */}
          <br />
          <img
            src="./JoelHiltonHeadshot.jpg"
            alt="picOfJoel"
            style={{ display: 'block', margin: 'auto', textAlign: 'center' }}
          />
        </div>

        {/* add a title */}
        <div className="col align-self-center text-center">
          <h2 className={styles.h1}>
            This website is a list of all the movies from Joel
          </h2>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
