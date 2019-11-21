import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import './App.css';
import Header from 'components/Header/Header';
import Livescores from 'components/Livescores/Livescores';
import LeagueStats from 'components/LeagueStats/LeagueStats';
import { Provider } from 'react-redux';
import store from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <Header />
        <Livescores />
        <LeagueStats />
      </div>
    </Provider>
  );
};

export default App;
