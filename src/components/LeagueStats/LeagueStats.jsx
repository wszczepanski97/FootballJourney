import React, { Component } from 'react';
import '../../App.css';
import 'react-slidedown/lib/slidedown.css';
import './LeagueStats.css';

class LeagueStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            myLeagues: ' ',
            matchday: 0
        }
    }
    prevFixtures = (e) => {
        const FixturesId = e.target.dataset.id;
        if(this.state.matchday > 1) {
            this.setState({
                matchday: this.state.matchday - 1
            })
        } else {
            this.setState({
                matchday: 1
            })
        }
        fetch(`http://api.football-data.org/v2/competitions/${e.target.dataset.id}/matches`, {
            'headers': {'X-Auth-Token': "66a3ae1a99224ad7b40b7c3e0360b7d8"}
        }).then(resp => resp.json()).then(response => {
            const fixtures = response.matches;
            const leagueMatchday = [];
            fixtures.forEach( el => {
                if(el.matchday === this.state.matchday){
                    leagueMatchday.push(el);
                }
            })
            const nowFixtures =
                <div id="leaguestats">
                <ul className="listOfMatches">
                    <h2>{response.competition.name}</h2>
                    <button onClick={el => this.componentDidMount(el)} className="buttonStyle buttonspace">Back to the Country List</button>
                    <button onClick={el => this.takeLeagues(el)} data-id={FixturesId} className="buttonStyle buttonspace">Back to the League Table</button>
                    <div className="arrowcontainer">
                        <button data-id={FixturesId} onClick={el => this.prevFixtures(el)} className="arrowButton">&#10094;</button>
                        <h2>Current Matchday: {this.state.matchday}</h2>
                        <button data-id={FixturesId} onClick={el => this.nextFixtures(el)} className="arrowButton">&#10095;</button>
                    </div>
                    {leagueMatchday.map(match => <li key={match.id} className="match"><h3 className="centerMatch">{match.utcDate.slice(0,10)} {match.utcDate.slice(11,16)}</h3> <h2 className="centerMatch">{match.homeTeam.name} {match.score.fullTime.homeTeam}-{match.score.fullTime.awayTeam} {match.awayTeam.name}</h2>  <h4 className="centerMatch">{match.status}</h4></li>)}
                </ul>
            </div>
            this.setState({
                myLeagues: nowFixtures
            })
        })
    }
    nextFixtures = (e) => {
        const FixturesId = e.target.dataset.id;
        if(this.state.matchday < 38) {
            this.setState({
                matchday: this.state.matchday + 1
            })
        } else {
            this.setState({
                matchday: 38
            })
        }
        fetch(`http://api.football-data.org/v2/competitions/${e.target.dataset.id}/matches`, {
            'headers': {'X-Auth-Token': "66a3ae1a99224ad7b40b7c3e0360b7d8"}
        }).then(resp => resp.json()).then(response => {
            console.log(response);
            const fixtures = response.matches;
            const numberofFixtures = fixtures[fixtures.length-1].matchday;
            const leagueMatchday = [];
            fixtures.forEach( el => {
                if(this.state.matchday === numberofFixtures){
                    this.setState({
                        matchday: numberofFixtures
                    })
                    leagueMatchday.push(el);
                }
                if(el.matchday === this.state.matchday){
                    leagueMatchday.push(el);
                }
            })
            const nowFixtures =
                <div id="leaguestats">
                    <h1 className="neon" data-text="Leagues">Leagues</h1>
                <ul className="listOfMatches">
                    <h2>{response.competition.name}</h2>
                    <button onClick={el => this.componentDidMount(el)} className="buttonStyle buttonspace">Back to the Country List</button>
                    <button onClick={el => this.takeLeagues(el)} data-id={FixturesId} className="buttonStyle buttonspace">Back to the League Table</button>
                    <div className="arrowcontainer">
                        <button data-id={FixturesId} onClick={el => this.prevFixtures(el)} className="arrowButton">&#10094;</button>
                        <h2>Current Matchday: {this.state.matchday}</h2>
                        <button data-id={FixturesId} onClick={el => this.nextFixtures(el)} className="arrowButton">&#10095;</button>
                    </div>
                    {leagueMatchday.map(match => <li key={match.id} className="match"><h3 className="centerMatch">{match.utcDate.slice(0,10)} {match.utcDate.slice(11,16)}</h3> <h2 className="centerMatch">{match.homeTeam.name} {match.score.fullTime.homeTeam}-{match.score.fullTime.awayTeam} {match.awayTeam.name}</h2>  <h4 className="centerMatch">{match.status}</h4></li>)}
                </ul>
            </div>
            this.setState({
                myLeagues: nowFixtures
            })
        })
    }
   takeFixtures = (e) => {
        const FixturesId = e.target.dataset.id;
        fetch(`http://api.football-data.org/v2/competitions/${e.target.dataset.id}/matches`, {
            'headers': {'X-Auth-Token': "66a3ae1a99224ad7b40b7c3e0360b7d8"}
        }).then(resp => resp.json()).then(response => {
            const fixtures = response.matches;
            const leagueMatchday = [];
            fixtures.forEach(el => {
                if (el.matchday === el.season.currentMatchday) {
                    leagueMatchday.push(el);
                }
            }
        )
            console.log(leagueMatchday);
            console.log(leagueMatchday[0].season.currentMatchday);
            const nowFixtures =
                <div id="leaguestats" className="leaguestats">
                    <h1 className="neon" data-text="Leagues">Leagues</h1>
                <ul className="listOfMatches">
                    <h2>{response.competition.name}</h2>
                    <button onClick={el => this.componentDidMount(el)} className="buttonStyle buttonspace">Back to the Country List</button>
                    <button onClick={el => this.takeLeagues(el)} data-id={FixturesId} className="buttonStyle buttonspace">Back to the League Table</button>
                    <div className="arrowcontainer">
                    <button data-id={FixturesId} onClick={el => this.prevFixtures(el)} className="arrowButton">&#10094;</button>
                    <h2>Current Matchday: {leagueMatchday[0].season.currentMatchday}</h2>
                        <button data-id={FixturesId} onClick={el => this.nextFixtures(el)} className="arrowButton">&#10095;</button>
                    </div>
                    {leagueMatchday.map(match => <li key ={match.id} className="match"><h3 className="centerMatch">{match.utcDate.slice(0,10)} {match.utcDate.slice(11,16)}</h3> <h2 className="centerMatch">{match.homeTeam.name} {match.score.fullTime.homeTeam}-{match.score.fullTime.awayTeam} {match.awayTeam.name}</h2>  <h4 className="centerMatch">{match.status}</h4></li>)}
                </ul>
            </div>
        this.setState({
            myLeagues: nowFixtures,
            matchday: leagueMatchday[0].season.currentMatchday
                    })
        })
    }

    takeLeagues = (e) => {
        const leagueID = e.target.dataset.id;
        fetch(`http://api.football-data.org/v2/competitions/${e.target.dataset.id}/standings`, {
            'headers': {'X-Auth-Token': "66a3ae1a99224ad7b40b7c3e0360b7d8"}
        }).then(resp => resp.json()).then(response => {
            console.log(response.standings[0].table);
            const leagueTable = response.standings[0].table;
            console.log(leagueTable);
            const thisTable =
                <div id="leaguestats" className="listOfMatches leaguestats">
                    <h1 className="neon" data-text="Leagues">Leagues</h1>
                    <button onClick={el => this.componentDidMount(el)} className="buttonStyle buttonspace">Back to the Country List</button>
                    <button onClick={el => this.takeFixtures(el)} className="buttonStyle buttonspace" data-id={leagueID}>Fixtures</button>
                <h1>{response.competition.name}</h1>
                <table className="table">
                    <tbody>
                    <tr key={leagueID}>
                        <th className='tablePadding tooltipposition'># <span className="position">Position</span></th>
                        <th className='tablePadding'>Team </th>
                        <th className='tablePadding tooltipgames'>Pl <span className="playedGames">Played Games</span></th>
                        <th className='tablePadding tooltipwon'>W <span className="won">Won</span></th>
                        <th className='tablePadding tooltipdrawn'>D <span className="drawn">Drawn</span></th>
                        <th className='tablePadding tooltiplost'>L <span className="lost">Lost</span></th>
                        <th className='tablePadding tooltipgoalsf'>F <span className="goalsFor">Goals for</span></th>
                        <th className='tablePadding tooltipgoalsa'>A <span className="goalsAgainst">Goals against</span></th>
                        <th className='tablePadding tooltipgoalsd'>GD <span className="goalDifference">Goal difference</span></th>
                        <th className='tablePadding tooltippoints'>Pts <span className="points">Points</span></th>
                    </tr>
                    {leagueTable.map(el =>
                        <tr className="centerMatch" key={el.team.id}>
                            <td className='tablePadding'>{el.position}</td>
                            <td className='tablePadding'>{el.team.name}</td>
                            <td className='tablePadding'>{el.playedGames}</td>
                            <td className='tablePadding'>{el.won}</td>
                            <td className='tablePadding'>{el.draw}</td>
                            <td className='tablePadding'>{el.lost}</td>
                            <td className='tablePadding'>{el.goalsFor}</td>
                            <td className='tablePadding'>{el.goalsAgainst}</td>
                            <td className='tablePadding'>{el.goalDifference}</td>
                            <td className='tablePadding'>{el.points}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            this.setState({
                myLeagues: thisTable

            })

        })
    }
    componentDidMount(){
        const CompetitionURL = "http://api.football-data.org/v2/competitions";
        fetch(CompetitionURL, {
            'headers': {'X-Auth-Token': "66a3ae1a99224ad7b40b7c3e0360b7d8"}
        }).then(resp => resp.json()).then(response => {
            const allLeagues = response.competitions;
            const myLeagues = [];
            for(let i =0; i < allLeagues.length; i++){
                if(allLeagues[i].plan === "TIER_ONE"
                    && allLeagues[i].name !== "Championship"
                    && allLeagues[i].name !== "FIFA World Cup"
                    && allLeagues[i].name !== "European Championship"
                    && allLeagues[i].name !== "UEFA Champions League"){
                    myLeagues.push(allLeagues[i]);
                }
            }
            const Leaguelist =
                <section id="leaguestats" className='leaguestats'>
                <ul className="listOfMatches"> <h1 className="neon" data-text="Leagues">Leagues</h1>
                {myLeagues.map(el => <li data-id={el.id} key={el.area.id} onClick={this.takeLeagues} className="matchItem">{el.area.name} {el.name}</li>)}
            </ul>
                </section>
            this.setState({
                myLeagues: Leaguelist

            })
            console.log(this.state.myLeagues);
        })
    }

    render() {
        return this.state.myLeagues
    }
}

export default LeagueStats;