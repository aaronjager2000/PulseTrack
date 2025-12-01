import { Fragment } from "react/jsx-runtime";
import Header from "./src/Compoents/Header";
import HomeText from "./src/Compoents/HomeText";
import Description from "./src/Compoents/Descriptions";
import PricesSection from "./src/Compoents/Prices";
import RegText from "./src/Compoents/RegText";
import Footer from "./src/Compoents/Footer";

function Home() {
  return (
    <Fragment>
      <div>
        <Header />
      </div>

      <div>
        <HomeText heading="| Pulse Tracker |" textOne="Welcome" />
        <Description description="We're An Open Source SaaS | Lets Users Create Accounts and Invite Teammates For Creating Issues for Problems" />
      </div>

      <RegText />

      <Footer />
    </Fragment>
  );
}

export default Home;
