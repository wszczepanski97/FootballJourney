import React, { Component } from 'react';
import 'views/App.css';
import './LeagueStats.css';
import NeonHeading from '../NeonHeading/NeonHeading';

class LeagueStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myLeagues: [],
      matchday: 0,
    };
  }

  render() {}
}

export default LeagueStats;
