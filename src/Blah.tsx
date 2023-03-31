import React from 'react';
import styles from './Blah.module.css';

function TopBanner() {
  return (
    <>
      <div>
        <div className="col-2">
          <img src="./JoelHiltonHeadshot.jpg" alt="picOfJoel" />
        </div>

        <div className="col align-self-center text-start">
          <h2>This website is a list of all the movies from Joel</h2>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
