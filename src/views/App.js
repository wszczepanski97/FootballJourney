import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import './App.css';
import Header from 'components/Header/Header';
import LeagueStats from 'components/LeagueStats/LeagueStats';
import Livescores from 'components/Livescores/Livescores';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Livescores />
      <LeagueStats />
    </div>
  );
};

export default App;
