import React, { Component } from 'react';

class LeagueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myLeagues: [],
      matchday: 0,
    };
  }

  componentDidMount() {
    const CompetitionURL = 'https://api.football-data.org/v2/competitions';
    fetch(CompetitionURL, {
      headers: { 'X-Auth-Token': '66a3ae1a99224ad7b40b7c3e0360b7d8' },
    })
      .then(resp => resp.json())
      .then(response => {
        const allLeagues = response.competitions.filter(
          league =>
            league.plan === 'TIER_ONE' &&
            league.area.name !== 'Europe' &&
            league.area.name !== 'World' &&
            league.name !== 'Championship',
        );
        console.log(allLeagues);
        this.setState({
          myLeagues: [...allLeagues],
        });
      });
  }

  render() {
    const { myLeagues } = this.state;
    return (
      <div>
        <ul className="listOfMatches">
          {myLeagues.map(league => (
            <li
              data-id={league.id}
              key={league.area.id}
              onClick={this.takeLeagues}
              className="matchItem"
            >
              {league.area.name} {league.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LeagueList;
