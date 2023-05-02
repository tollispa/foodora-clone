import Navbar from "./components/Navbar"
import Home from "./components/Home"
import FoodCategory from "./components/FoodCategory";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <FoodCategory/>
      <Footer/>
    </div>
  );
}

export default App;
