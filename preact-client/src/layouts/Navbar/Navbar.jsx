import React from 'react';
import { Link } from 'wouter';
import Styles from './Navbar.module.css';

import LogoComponent from 'assets/logo/LogoComponent';
import LinkWithPreload from 'components/LinkWithPreload/LinkWithPreload';

function useOutsideAlerter(ref, handler) {
  React.useEffect(() => {
    // alert if clicked on outside of element
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        // is clicked outside, run the handler
        handler(e);
      }
    }
    // bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // cleanup: unbind the listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleToggleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClose = (e) => {
    setIsMenuOpen(false);
  };

  const wrapperRef = React.useRef(null);
  useOutsideAlerter(wrapperRef, handleClose);

  return (
    <nav
      className={`flex-jcenter-acenter ${Styles.wrapper} panel-shadow--light`}
    >
      <div className={`flex-acenter ${Styles.navbar}`}>
        <Link
          href='/'
          className={`flex-acenter-jcenter ${Styles.home}`}
        >
          {/* The space below IS NECESSARY for the link to work! Remove it and the link disappears but the logo still shows */}{' '}
          <LogoComponent
            className={Styles.logo}
            styles={Styles}
          />
          <div className={Styles.logo_bg_ellipse}></div>
        </Link>

        <div
          ref={wrapperRef}
          className={Styles.menu_container}
        >
          {/* Hamburger icon*/}
          <div
            className={Styles.dropdown_button}
            onClick={handleToggleMenu}
          >
            {!isMenuOpen && <i className={`fas fa-bars ${Styles.bars}`} />}
            {isMenuOpen && (
              <i className={`fa-solid fa-x ${Styles.bars_close}`} />
            )}
          </div>

          <div
            className={`flex-acenter ${Styles.menu} ${
              isMenuOpen && Styles.menu_open
            }`}
          >
            {/*
            <LinkWithPreload
              href='/services'
              className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
              onClick={handleClose}
            >
              Services
            </LinkWithPreload>
            <LinkWithPreload
              href='/how-to-order'
              className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
              onClick={handleClose}
            >
              How To Order
            </LinkWithPreload>
            <LinkWithPreload
              href='/order'
              className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
              onClick={handleClose}
            >
              Order
            </LinkWithPreload>
            <LinkWithPreload
              href='/meet-the-team'
              className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
              onClick={handleClose}
            >
              Meet The Team
            </LinkWithPreload>
            <LinkWithPreload
              href='/FAQ'
              className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
              onClick={handleClose}
            >
              FAQ
            </LinkWithPreload>
            <a
              href='#more-links'
              className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
              onClick={handleClose}
            >
              More...
            </a>
            */}


            {/* These show only on the mobile menu */}
            <a
              href='#contact'
              className={`${Styles.newsletter_mobile} flex-jcenter-acenter ${Styles.links}`}
              onClick={handleClose}
            >
              Contact Us
            </a>

            <LinkWithPreload
              href='/newsletter/subscribe'
              className={`${Styles.newsletter_mobile} flex-jcenter-acenter ${Styles.links}`}
              onClick={handleClose}
            >
              Newsletter
            </LinkWithPreload>
          </div>
        </div>

        {/* This shows only on larger screens (the nice looking button) */}
        <LinkWithPreload href='/newsletter/subscribe'>
          <div
            className={`${Styles.newsletter_button} btn--outline btn--large`}
            tabIndex='0'
          >
            Newsletter
          </div>
        </LinkWithPreload>
      </div>
    </nav>
  );
}

export default Navbar;
