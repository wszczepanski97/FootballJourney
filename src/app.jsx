import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Header from './components/header/Header.jsx';
import LeagueStats from './components/LeagueStats/LeagueStats.jsx';
import Livescores from './components/Livescores/Livescores.jsx';

class App extends React.Component {
   constructor(props){
     super(props);

   }
   render() {
     return (
         <div>
             <Header />
             <Livescores/>
             <LeagueStats/>
         </div>
             )
   }
 }

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )

})
