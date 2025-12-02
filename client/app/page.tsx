import { Fragment } from "react/jsx-runtime"
import Description from "./src/Compoents/Descriptions"
import Footer from "./src/Compoents/Footer"
import Header from "./src/Compoents/Header"
import HomeText from "./src/Compoents/HomeText"
// import { useState } from "react";

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

      <Footer />
    </Fragment>
  );
}

export default Home;
