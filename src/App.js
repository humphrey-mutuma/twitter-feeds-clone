import "./App.css";
import Menu from "./components/Menu";
import Treading from "./components/Treading";
import Tweets from "./components/Tweets";

function App() {
  return (
    <div className="app">
      <section className="app__menu">
        <Menu />
      </section>
      <main className="app__tweets">
        <Tweets />
      </main>
      <section className="app__treading">
        <Treading />
      </section>
    </div>
  );
}

export default App;
