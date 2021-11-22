import { useSelector, useDispatch } from 'react-redux';
import * as selectors from './selectors';
import { updateCounter } from './actions/actions';

function Test() {
  const dispatch = useDispatch();
  const count = useSelector(selectors.getCount);
  return (

    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{count}</h1>
        <button onClick={() => dispatch(updateCounter(count + 1))}>Lisää</button>
      </header>
    </div>
  );
}

export default Test;
