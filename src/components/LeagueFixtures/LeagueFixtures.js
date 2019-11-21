import React, { Component } from 'react';
import Button from 'components/Button/Button';
import Heading from 'components/Heading/Heading';

class LeagueFixtures extends Component {
  state = {
    allFixturesInTheSeason: [],
    competitionName: '',
    fixtures: [],
    matchday: 0,
    numberOfFixtures: 38,
  };

  componentDidMount() {
    // const FixturesId = e.target.dataset.id;
    // ${e.target.dataset.id} instead of 2002
    fetch(`https://api.football-data.org/v2/competitions/2002/matches`, {
      headers: { 'X-Auth-Token': '66a3ae1a99224ad7b40b7c3e0360b7d8' },
    })
      .then(resp => resp.json())
      .then(response => {
        const fixtures = response.matches;
        this.setState({
          allFixturesInTheSeason: fixtures,
          competitionName: response.competition.name,
          fixtures: fixtures.filter(fixture => fixture.matchday === fixture.season.currentMatchday),
          matchday: fixtures[0].season.currentMatchday,
          numberofFixtures: fixtures[fixtures.length - 1].matchday,
        });
      });
  }

  nextFixtures = e => {
    this.setState(
      (prevState, props) => {
        return {
          matchday:
            prevState.matchday !== prevState.numberofFixtures
              ? prevState.matchday + 1
              : prevState.numberofFixtures,
        };
      },
      () => {
        this.setState((prevState, props) => {
          return {
            fixtures: prevState.allFixturesInTheSeason.filter(
              fixture => fixture.matchday === prevState.matchday,
            ),
          };
        });
      },
    );
  };

  prevFixtures = e => {
    this.setState(
      (prevState, props) => {
        return {
          matchday: prevState.matchday !== 1 ? prevState.matchday - 1 : 1,
        };
      },
      () => {
        this.setState((prevState, props) => {
          return {
            fixtures: prevState.allFixturesInTheSeason.filter(
              fixture => fixture.matchday === prevState.matchday,
            ),
          };
        });
      },
    );
  };

  render() {
    const { fixtures, competitionName, matchday } = this.state;
    return (
      <div id="leaguestats" className="leaguestats">
        <ul className="listOfMatches">
          <Heading subtitle style={{ color: 'black' }}>
            {competitionName}
          </Heading>
          <Button className="buttonStyle buttonspace">Back to the Country List</Button>
          <Button data-id={2002} className="buttonStyle buttonspace">
            Back to the League Table
          </Button>
          <div className="arrowcontainer">
            <Button data-id={2002} className="arrowButton" onClick={this.prevFixtures}>
              &#10094;
            </Button>
            <Heading subtitle style={{ color: 'black' }}>
              Current Matchday: {matchday}
            </Heading>
            <Button data-id={2002} className="arrowButton" onClick={this.nextFixtures}>
              &#10095;
            </Button>
          </div>
          {fixtures.map(match => (
            <li key={match.id} className="match">
              <h3 className="centerMatch">
                {match.utcDate.slice(0, 10)} {match.utcDate.slice(11, 16)}
              </h3>{' '}
              <h2 className="centerMatch">
                {match.homeTeam.name} {match.score.fullTime.homeTeam}-
                {match.score.fullTime.awayTeam} {match.awayTeam.name}
              </h2>{' '}
              <h4 className="centerMatch">{match.status}</h4>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LeagueFixtures;
