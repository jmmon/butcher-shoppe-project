import React from 'react';
import Styles from './Newsletter.module.css';

import bgImage from 'assets/images/image-1-136-cropped-55.jpg';

import PageTitle from 'layouts/PageTitle/PageTitle';
import Subscribe from 'components/Subscribe/Subscribe';
import PageLayout from 'layouts/PageLayout/PageLayout';
import Card from 'components/Card/Card';
import WhitePageBackground from 'layouts/WhitePageBackground/WhitePageBackground';
import Button from 'components/Button/Button';
import { Helmet } from 'react-helmet';
import { META } from 'utils/CONSTANTS';

export default function NewsletterPage({ 
  //path, 
  //setVisitedRoutes 
}) {
  //React.useEffect(() => {
  //if (setVisitedRoutes)
    //setVisitedRoutes((prev) => [...prev, path]);
  //}, []);

  return (
    <PageLayout
      helmet={
        <Helmet>
          <title>Our Newsletter | The Butcher Shoppe | Northport, WA</title>
          <meta
            name={META.newsletter.name}
            content={META.newsletter.content}
          />
        </Helmet>
      }
      title={
        <PageTitle
          title='UNSUBSCRIBE'
          bgImage={bgImage}
        />
      }
      bottomNav={
        <WhitePageBackground separate={true}>
          <div className={`flex-col-acenter ${Styles.unsubscribe_container}`}>
            <h3>Looking to Subscribe?</h3>
            <Button
              className='btn--outline btn--large'
              url='/newsletter/subscribe'
            >
              Click here
            </Button>

            <Button
              className='btn--outline btn--large'
              url='/'
            >
              Home
            </Button>
          </div>
        </WhitePageBackground>
      }
    >
      <section>
        <Card title='Want To Unsubscribe?'>
          <p>
            We hope you enjoy our newsletters! If you are already a newsletter
            subscriber and wish to unsubscribe, you can do that here.
          </p>
          <p>
            Enter your subscribed email below and we will send you an email for
            you to confirm your removal from our newsletter mailing list. Click
            the link in the email and you will be unsubscribed!
          </p>
        </Card>

        <div className={Styles.mt_6}></div>
        <Subscribe unsubscribe />
        <div className={Styles.mt_4}></div>
      </section>
    </PageLayout>
  );
}
