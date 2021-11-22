import { Provider } from "react-redux";
import { FetchQuotes } from "./components/FetchQuotes/FetchQuotes";
import { Header } from "./components/Header/Header";
import { QuoteCounter } from "./components/QuoteCounter/QuoteCounter";
import { QuoteFilter } from "./components/QuoteFilter/QuoteFilter";
import { QuoteList } from "./components/QuoteList/QuoteList";
import configureStore from "./store";
import { Wrapper, TopWrapper } from "./styles";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <TopWrapper>
          <FetchQuotes />
          <QuoteFilter />
          <QuoteCounter />
        </TopWrapper>
        <QuoteList />
      </Wrapper>
    </Provider>
  );
}

export default App;
