import "Home.css";
import { About } from "components/about/About";
import { Hero } from "components/hero/Hero";

function Home() {
  return (
    <div >
      <Hero />
      <About />
    </div>
  );
}

export default Home;
