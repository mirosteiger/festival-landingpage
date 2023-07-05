import "Home.css";
import { About } from "components/about/About";
import { Hero } from "components/hero/Hero";
import { Lineup } from "components/lineup/Lineup";
import stage from "assets/images/stage.jpg";

function Home() {
  return (
    <div>
      <Hero />
      <div
        style={{
          height: "20rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", color: "white" }}>GUUUDDE</h1>
      </div>
      <img src={stage} width={"100%"} alt="stage" />
      <Lineup />
      <About />
    </div>
  );
}

export default Home;
