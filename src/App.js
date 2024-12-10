import logo from "./logo.svg";
import "./App.css";

import Header from "./Ccomponents/Header";
import Switch from "./Ccomponents/Switch";
import TopCardList from "./Ccomponents/top-card-list";
import Overview from "./Ccomponents/Overview";

function App() {
  return (
    <div className="App">
      <>
        <Header>
          <Switch />
        </Header>
        <TopCardList />
        <Overview />
      </>
    </div>
  );
}

export default App;
