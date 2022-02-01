import "./App.css";
import Header from "./Header";
import HeroCard from "./HeroCard";
const hash= '41a55cd69acd6d04288ffba35c24a87f'
import axios from 'axios'


function App() {
  return (
    <div className="App">
      <Header />

      <div className="scroll">
        <div className="card">
          <div className="carCol">
            <HeroCard/>
          </div>
          <div className="carCol">
          <HeroCard/>
          </div>
          <div className="carCol">
          <HeroCard/>
          </div>
        </div>
      </div>




    </div>
  );
}

export default App;
