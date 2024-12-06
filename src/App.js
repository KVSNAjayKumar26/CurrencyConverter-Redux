import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import CurrencyConverter from './components/CurrencyConverter'

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <CurrencyConverter />
      </div>
    </Provider>
  );
};

export default App;