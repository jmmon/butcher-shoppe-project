import React from 'react';
import TelLink from 'components/TelLink/TelLink';
import Styles from './Header.module.css';


import { ReactComponent as PhoneIcon } from 'assets/icons/211829_telephone_icon.svg';
import { ReactComponent as ChatIcon } from 'assets/icons/211711_chatbubble_icon.svg';
import { ReactComponent as LocationIcon } from 'assets/icons/211766_location_icon.svg';
import { ReactComponent as NewsletterIcon } from 'assets/icons/newsletter_icon_64_shrunk_vecta.svg';
import LinkScrollUp from 'components/LinkScrollUp/LinkScrollUp';

function Header() {
  return (
    <div className={Styles.main}>
      <div className={`flex-jbetween gap-1 ${Styles.container}`}>
        <LinkScrollUp
          className={`flex-acenter ${Styles.link}`}
          path='/newsletter/subscribe'
          preload={false}
          useDefaultClasses={false}
        >
          <NewsletterIcon
            className={`${Styles.icon} ${Styles.newsletter_icon}`}
          />
          <span className={Styles.text}>Newsletter</span>
        </LinkScrollUp>

        <TelLink className={`flex-acenter ${Styles.link}`}>
          <PhoneIcon className={Styles.icon} />
          <span className={Styles.text}>(509) 640-6766</span>
        </TelLink>

        <a
          className={`flex-acenter ${Styles.link}`}
          href='#contact'
        >
          <ChatIcon className={Styles.icon} />
          <span className={Styles.text}>Contact Us</span>
        </a>

        <a
          className={`flex-acenter ${Styles.link}`}
          href='#map'
        >
          <LocationIcon className={`${Styles.icon} ${Styles.location_icon}`} />
          <span className={Styles.text}>Northport, WA</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
