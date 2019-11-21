import React, { Component } from 'react';
import Button from 'components/Button/Button';
import Heading from 'components/Heading/Heading';
import { changeLeagueStatsView as changeLeagueStatsViewAction } from 'actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LeagueTable extends Component {
  state = {
    label: 'leagueTable',
    myLeagues: [],
    leagueName: '',
    matchday: 0,
  };

  componentDidMount() {
    // const leagueID = e.target.dataset.id;
    // ${e.target.dataset.id}
    fetch(`https://api.football-data.org/v2/competitions/2002/standings`, {
      headers: { 'X-Auth-Token': '66a3ae1a99224ad7b40b7c3e0360b7d8' },
    })
      .then(resp => resp.json())
      .then(response => {
        const leagueTable = response.standings[0].table;
        this.setState({
          myLeagues: leagueTable,
          leagueName: response.competition.name,
        });
      });
  }

  render() {
    const { myLeagues, leagueName } = this.state;
    const { changeLeagueStatsView } = this.props;
    return (
      <div>
        <Button
          className="buttonStyle buttonspace"
          onClick={() => changeLeagueStatsView('leagueList')}
        >
          Back to the Country List
        </Button>
        <Button
          className="buttonStyle buttonspace"
          data-id={2000}
          onClick={() => changeLeagueStatsView('leagueFixtures')}
        >
          Fixtures
        </Button>
        <Heading style={{ color: 'black' }}>{leagueName}</Heading>
        <table className="table">
          <tbody>
            <tr key={2000}>
              <th className="tablePadding tooltipposition">
                # <span className="position">Position</span>
              </th>
              <th className="tablePadding">Team </th>
              <th className="tablePadding tooltipgames">
                Pl <span className="playedGames">Played Games</span>
              </th>
              <th className="tablePadding tooltipwon">
                W <span className="won">Won</span>
              </th>
              <th className="tablePadding tooltipdrawn">
                D <span className="drawn">Drawn</span>
              </th>
              <th className="tablePadding tooltiplost">
                L <span className="lost">Lost</span>
              </th>
              <th className="tablePadding tooltipgoalsf">
                F <span className="goalsFor">Goals for</span>
              </th>
              <th className="tablePadding tooltipgoalsa">
                A <span className="goalsAgainst">Goals against</span>
              </th>
              <th className="tablePadding tooltipgoalsd">
                GD <span className="goalDifference">Goal difference</span>
              </th>
              <th className="tablePadding tooltippoints">
                Pts <span className="points">Points</span>
              </th>
            </tr>
            {myLeagues.map(el => (
              <tr className="centerMatch" key={el.team.id}>
                <td className="tablePadding">{el.position}</td>
                <td className="tablePadding">{el.team.name}</td>
                <td className="tablePadding">{el.playedGames}</td>
                <td className="tablePadding">{el.won}</td>
                <td className="tablePadding">{el.draw}</td>
                <td className="tablePadding">{el.lost}</td>
                <td className="tablePadding">{el.goalsFor}</td>
                <td className="tablePadding">{el.goalsAgainst}</td>
                <td className="tablePadding">{el.goalDifference}</td>
                <td className="tablePadding">{el.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeLeagueStatsView: view => dispatch(changeLeagueStatsViewAction(view)),
});

LeagueTable.propTypes = {
  changeLeagueStatsView: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LeagueTable);
