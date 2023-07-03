import logo from "logo.svg";
import "Home.css";
import { Hero } from "components/Hero";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
      </header>
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HOME</h1>
      </main>
    </div>
  );
}

export default Home;
