import { Fragment } from "react/jsx-runtime";
import Header from "./src/Compoents/Header";
import HomeText from "./src/Compoents/HomeText";

function Home() {
  return (
    <Fragment>
      <div>
        <Header />
      </div>

      <div>
        <HomeText heading="Welcome to Pulse Tracker" />
      </div>
    </Fragment>
  );
}

export default Home;
