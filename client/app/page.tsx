import { Fragment } from 'react/jsx-runtime';
import Header from './src/Components/Header';
import HomeText from './src/Components/HomeText';
import Description from './src/Components/Descriptions';
import BoxSection from './src/Components/BoxSeftion';
import ImageContainer from './src/Components/ImageContainer';
import Footer from './src/Components/Footer';

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
        <ImageContainer image />

        <BoxSection textBox="What We Offer." />
        <BoxSection textBox="What We Offer" />
        <ImageContainer image />
        <BoxSection textBox="What We Offer" />
        <ImageContainer image />
      </div>

      <Footer />
    </Fragment>
  );
}

export default Home;
