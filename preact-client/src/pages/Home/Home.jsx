import React from 'react';

import Card from 'components/Card/Card';
//import NavBottomButtons from 'layouts/NavBottomButtons/NavBottomButtons';
import HomepageTitle from 'layouts/HomepageTitle/HomepageTitle';
import PageLayout from 'layouts/PageLayout/PageLayout';
import { Helmet } from 'react-helmet';
import CONSTANTS from 'utils/CONSTANTS';
import { ComponentInView } from 'utils/ComponentInView';
import Styles from './Home.module.css';

export default function Home() {
  return (
    <PageLayout
      separate
      helmet={
        <Helmet>
          <title>
            The Butcher Shoppe: Mobile Slaughter Truck | Northport, WA
          </title>
          <meta
            name='description'
            content="Serving the tri-county area in northeast Washington. Sorry, we're temporarily closed! Please join our newsletter to know when we will re-open with full service!"
          />
        </Helmet>
      }
      title={
        <HomepageTitle
          title='The Butcher Shoppe'
          subtitle='Mobile Farm Slaughter'
          subtext='Serving Northeast Washington State'
        />
      }
    >
      <div className={`grid-row-gap-8 padding-2--bot ${Styles.container}`}>
        <Card
          title='Thank you for visiting! We are temporarily closed.'
          paragraphs={[
            'We appreciate your support and we look forward to serving you again soon!',
            'Our mission is to serve our friends, neighbors and surrounding community through convenient humane mobile farm slaughter.',
          ]}
        >
          <p>
            While our processing Shoppe is under construction, we have decided
            to temporarily pause our mobile slaughter truck service as well.
            Please join our <a href='#newsletter'>newsletter</a> to be among the
            first to know when we re-open with full services!
          </p>
        </Card>
      </div>
    </PageLayout>
  );
}
