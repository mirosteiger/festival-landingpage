import "Home.css";
import { About } from "components/about/About";
import { Disturber } from "components/disturber/disturber";
import { Hero } from "components/hero/Hero";
import { Lineup } from "components/lineup/Lineup";

function Home() {
  return (
    <div>
      <Hero />
      <Disturber />
      <Lineup />
      <About />
    </div>
  );
}

export default Home;
