import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Greeting from "./Greeting";
function App() {
  let name = "Pooja";
  return (
    <div>
    <h1>Hello</h1>
    <Greeting name = {'Akash'} />
    <Greeting name = {'Ayush'} />
    {/* <Home name = {name} age = {24} />
    <About />
    <Contact /> */}
    </div>
  );
}

export default App;
