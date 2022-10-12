import { Provider } from 'react-redux';
import ConnectedRoom from './components/ConnectedRoom'
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ConnectedRoom/>
    </div>
    </Provider>
  );
}

export default App;
