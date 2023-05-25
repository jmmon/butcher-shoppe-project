import React from 'react';

import WhitePageBackground from 'layouts/WhitePageBackground/WhitePageBackground';
import { Helmet } from 'react-helmet';
//import { ComponentInView } from 'utils/ComponentInView';
//import CONSTANTS from 'utils/CONSTANTS';
import { META } from 'utils/CONSTANTS';

export default function PageLayout({
  separate = false,
  helmet = null,
  title = '',
  children,
  bottomNav = null,
}) {
  return (
    <>
      {helmet ? (
        helmet
      ) : (
        <Helmet>
          <title>
            The Butcher Shoppe: Mobile Slaughter Truck | Northport, WA
          </title>
          <meta
            name={META.main.name}
            content={META.main.content}
          />
        </Helmet>
      )}
      <main>
        {title}

        <WhitePageBackground separate={separate}>
          {children}
        </WhitePageBackground>

        {bottomNav !== null && (
          //<ComponentInView marginPx={CONSTANTS.OFFSET.SECOND}>
            bottomNav
          //</ComponentInView>
        )}
      </main>
    </>
  );
}
