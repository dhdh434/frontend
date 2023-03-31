import React from 'react';
import styles from './Blah.module.css';

function TopBanner() {
  return (
    <>
      <div>
        <div className="col-2">
          {/* add an image */}
          <img src="./JoelHiltonHeadshot.jpg" alt="picOfJoel" />
        </div>

        {/* add a title */}
        <div className="col align-self-center text-start">
          <h2>This website is a list of all the movies from Joel</h2>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
