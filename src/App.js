import { Provider } from "react-redux";
import store from "./redux/Store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceContainer from "./components/IceContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer/>
        <IceContainer/>
      </div>
    </Provider>
  );
}

export default App;
