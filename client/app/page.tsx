import { Fragment } from 'react/jsx-runtime';
import Header from './src/Compoents/Header';
import HomeText from './src/Compoents/HomeText';
import Description from './src/Compoents/Descriptions';
import Footer from './src/Compoents/Footer';
import BoxSection from './src/Compoents/BoxSeftion';

function Home() {
  return (
    <Fragment>
      <div>
        <Header />
      </div>

      <div>
        <HomeText heading="| Pulse Tracker |" textOne="Welcome" />
        <Description description="Created By The PulseTrack | Team" />
      </div>

      <div className="flex max-md:flex-col justify-between">
        <BoxSection textBox="What We Offer" />
        <BoxSection textBox="What We Offer" />
        <BoxSection textBox="What We Offer" />
      </div>

      <Footer />
    </Fragment>
  );
}

export default Home;
