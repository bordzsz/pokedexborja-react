import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import "./styles.css";

function App() {
  //const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        <Pokedex/>
      </div>
    </div>
  );
}

export default App;
