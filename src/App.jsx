import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
// import Sarvinoz from "./components/Sarvinoz";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      {/* <Sarvinoz /> */}
    </main>
  );
};

export default App;
