import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import './App.css';
import Header from 'components/Header/Header';
import Livescores from 'components/Livescores/Livescores';
import LeagueList from 'components/LeagueList/LeagueList';
import LeagueTable from 'components/LeagueTable/LeagueTable';
import LeagueFixtures from 'components/LeagueFixtures/LeagueFixtures';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Livescores />
      <LeagueList />
      <LeagueTable />
      <LeagueFixtures />
    </div>
  );
};

export default App;
