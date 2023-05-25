import React from 'react';
import { Link, useLocation } from 'wouter';
import LinkWithPreload from 'components/LinkWithPreload/LinkWithPreload';
import LinksStyles from 'assets/styles/Links.module.css';

export default function LinkScrollUp({
  className = '',
  path,
  underline,
  children,
  preload = true,
  useDefaultClasses = true,
}) {
  const [location] = useLocation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const isPathMatching = location === path || path === undefined;

  const classes = !useDefaultClasses ? className : `${LinksStyles.main_link} ${
    underline && LinksStyles.underline
  } ${className}`;

  React.useEffect(() => {
    console.log('LinkScrollUp useEffect:', {isPathMatching, preload})
  }, [])

  return (
    <>
      {isPathMatching ? (
        <span
          tabIndex='0' // not tab-focusable
          className={classes}
          style={{ cursor: 'pointer' }}
          onClick={() => scrollToTop()}
        >
          {children}
        </span>
      ) : preload ? (
        <LinkWithPreload
          className={classes}
          href={path}
        >
          {children}
        </LinkWithPreload>
      ) : (
        <Link
          className={classes}
          to={path}
        >
          {children}
        </Link>
      )}
    </>
  );
}
