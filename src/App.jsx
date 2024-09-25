import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
// import Sarvinoz from "./components/Sarvinoz";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      {/* <Sarvinoz /> */}
    </main>
  );
};

export default App;
