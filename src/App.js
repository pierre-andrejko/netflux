import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Liste from "./components/Liste";
import Poland from "./components/Poland";

import Rewatch from "./components/Rewatch";
import Trends from "./components/Trends";
import PolMovie from "./components/Polmovie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Liste title={"Revoir"} items={Rewatch} />
      <Liste title={"Tendances actuelles"} items={Trends} />
      <Poland />
      <Liste title={""} items={PolMovie}/>
      <Footer />
    </div>
  );
}

export default App;
