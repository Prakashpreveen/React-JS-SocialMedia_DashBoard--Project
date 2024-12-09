import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";
import Switch from "./Components/Switch";
import TopCardList from "./Components/TopCardList";

function App() {
  return (
    <div className="App">
      <>
        <Header>
          <Switch />
        </Header>
        <TopCardList />
      </>
    </div>
  );
}

export default App;
