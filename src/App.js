import { Provider } from "react-redux";
import store from "./redux/Store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceContainer from "./components/IceContainer";
import CakeContainer2 from "./components/CakeContainer2";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CakeContainer2/>
        <HooksCakeContainer/>
        <IceContainer/>
        <ItemContainer cake />
        <ItemContainer/>
      </div>
    </Provider>
  );
}

export default App;
