import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./store";
import Test from './Test';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
}

export default App;
