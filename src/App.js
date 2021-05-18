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
      <main className="tweets">
        <Tweets />
      </main>
      <section className="treading">
        <Treading />
      </section>
    </div>
  );
}

export default App;
