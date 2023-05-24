import React from 'react';
import Styles from './Newsletter.module.css';

import bgImage from 'assets/images/image-1-136-cropped-55.jpg';

import PageTitle from 'layouts/PageTitle/PageTitle';
import Subscribe from 'components/Subscribe/Subscribe';
import Button from 'components/Button/Button';
import WhitePageBackground from 'layouts/WhitePageBackground/WhitePageBackground';
import Card from 'components/Card/Card';
import PageLayout from 'layouts/PageLayout/PageLayout';
import { Helmet } from 'react-helmet';
import { META } from '../../utils/CONSTANTS';

export default function NewsletterPage({ path, setVisitedRoutes }) {
  React.useEffect(() => {
    setVisitedRoutes((prev) => [...prev, path]);
  }, []);

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
          title='SUBSCRIBE TO OUR NEWSLETTER'
          bgImage={bgImage}
          smaller
        />
      }
      bottomNav={
        <WhitePageBackground separate={true}>
          <div className={`flex-col-acenter ${Styles.unsubscribe_container}`}>
            <h3>Looking to unsubscribe?</h3>
            <Button
              className='btn--outline btn--large'
              url='/newsletter/unsubscribe'
            >
              Click here
            </Button>
          </div>
        </WhitePageBackground>
      }
    >
      <section>
        <Card
          title="What's happening at The Butcher Shoppe?"
          className={Styles.card}
        >
          <div className={`flex-jcenter ${Styles.subheading_container}`}>
            <h3 className={`flex-col ${Styles.subheading}`}>
              <em>Get All Our Updates Delivered Straight To Your Inbox!</em>
            </h3>
          </div>
          <p>
            While we are pausing our service temporarily, make sure you join our
            newsletter so you can be among the first to know when our full
            services will re-open!
          </p>
          <hr className={Styles.hr}/>
          <p>
            For our neighbors and our community, we like to keep everyone up to
            date on all things related to The Butcher Shoppe. The best way to
            stay up to date on our service is to join our newsletter!
          </p>
          <p>
            Want to stay informed? Take part in our newsletter to stay up to
            date on all the Shoppe information: news, updates, and more!
          </p>
          <p>
            Enter your email address below and click "Subscribe" to receive
            instructions on how to confirm your newsletter subscription!
          </p>
        </Card>
        <div className={Styles.mt_6}></div>
        <Subscribe />
        <div className={Styles.mt_4}></div>
      </section>
    </PageLayout>
  );
}
