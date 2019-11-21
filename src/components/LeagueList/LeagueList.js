import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLeagueStatsView as changeLeagueStatsViewAction } from 'actions';
import PropTypes from 'prop-types';

class LeagueList extends Component {
  state = {
    label: 'leagueList',
    myLeagues: [],
  };

  componentDidMount() {
    const CompetitionURL = 'https://api.football-data.org/v2/competitions';
    fetch(CompetitionURL, {
      headers: { 'X-Auth-Token': '66a3ae1a99224ad7b40b7c3e0360b7d8' },
    })
      .then(resp => resp.json())
      .then(response => {
        this.setState({
          myLeagues: response.competitions.filter(
            league =>
              league.plan === 'TIER_ONE' &&
              league.area.name !== 'Europe' &&
              league.area.name !== 'World' &&
              league.name !== 'Championship',
          ),
        });
      });
  }

  render() {
    const { myLeagues, label } = this.state;
    const { changeLeagueStatsView } = this.props;
    return (
      <div>
        <ul className="listOfMatches">
          {myLeagues.map(league => (
            <li
              data-id={league.id}
              key={league.area.id}
              onClick={() => changeLeagueStatsView('leagueTable')}
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

const mapDispatchToProps = dispatch => ({
  changeLeagueStatsView: view => dispatch(changeLeagueStatsViewAction(view)),
});

LeagueList.propTypes = {
  changeLeagueStatsView: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LeagueList);
