import { Disturber } from "components/disturber/disturber";
import { Hero } from "components/hero/Hero";
import { Lineup } from "components/lineup/Lineup";

function Home() {
  return (
    <div>
      <Hero />
      <Disturber />
      <Lineup />
    </div>
  )
}

export default Home;
