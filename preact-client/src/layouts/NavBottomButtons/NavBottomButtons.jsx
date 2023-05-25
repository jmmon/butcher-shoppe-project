import React from 'react';
import Button from 'components/Button/Button';
import WhitePageBackground from 'layouts/WhitePageBackground/WhitePageBackground';

import Styles from './NavBottomButtons.module.css';

export default function NavBottomButtons({ prev, next, heading = "Helpful Links:"}) {
  return (
    <WhitePageBackground separate={true}>
      <div className={`flex-jevenly-acenter-wrap ${Styles.container}`}>
        <h4 className={`text-center ${Styles.heading}`}>{heading}</h4>

        {prev && (
          <Button
            className='btn--outline btn--large'
            url={prev.link}
          >
            {prev.title}
          </Button>
        )}

        {next && (
          <Button
            className='btn--outline btn--large'
            url={next.link}
          >
            {next.title}
          </Button>
        )}
      </div>
    </WhitePageBackground>
  );
}
