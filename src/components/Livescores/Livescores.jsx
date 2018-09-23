import React, { Component } from 'react';
import '../../App.css';
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import './Livescores.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Livescores extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: ' ',
            events: ' ',
            liveevents: ' '
        }
    }
    events = (e) => {
        const urlResults = 'https://livescore-api.com/api-client/scores/live.json?key=pZU6MActpiAQg0FG&secret=49BQZNV4MQWnVlskkmr7WDAmVbccbSTf';
        fetch(urlResults).then(resp => resp.json()).then(response => {
            console.log(response);
            let results = response.data.match;
            const liveresults = results.map(r => <li className="matchItem"
                                                         key={r.id}
                                                     data-events={r.events}
                                                     data-home ={r.home_name}
                                                     data-score = {r.score}
                                                     data-away = {r.away_name}
                                                     onClick={el => this.takeEvents(el)}>{r.league_name} {r.home_name} {r.score} {r.away_name} Minute: {r.time}
                                                      </li>);
            console.log(liveresults);
            const liveevents = results.map(r => r.events);
            console.log(liveevents);
            const eventsarray = [];
            for (let i = 0; i < liveevents.length; i++) {
                if (liveevents[i] !== false) {
                    eventsarray.push(liveevents[i]);
                }
            }
            console.log(eventsarray);
            const ampersand = eventsarray.map(el =>  el.replace(/&amp;/g, '&'));
            console.log(ampersand);
            this.setState({
                results: liveresults,
                events: eventsarray,
                ampersand: ampersand
            })
        })
    }
    takeEvents = (e) => {
        const array = [];
        const score = e.target.dataset.score;
        const hometeam = e.target.dataset.home;
        const awayteam = e.target.dataset.away;
        for (let j = 0; j < this.state.events.length; j++) {
            if (e.target.dataset.events === this.state.events[j]) {
                fetch(this.state.ampersand[j]).then(resp => resp.json()).then(response => {
                    response.data.event.forEach(el => {
                            array.push(el);
                        }
                    )
                    console.log(array);
                    const liveevents = array.map(r =>
                        <h5 style={{marginBottom: "20"}}>Minute: {r.time} {r.event} {r.player}</h5>
                    );
                    console.log(el => this.state.results[el]);
                    console.log(liveevents);
                    const liveeventsindiv = <div className="liveevents">
                        <h3>{hometeam} {score} {awayteam} </h3>
                        {liveevents}
                    </div>;
                    this.setState({
                        liveevents: liveeventsindiv
                    })
                })
            }
        }
    }


        componentDidMount() {
        setTimeout(
            () => this.events(), 0
        );
        this.timerID = setInterval(
            () => this.events(), 60000
        );

    }
    render() {
        return (
            <section className="liveScores">
                <div id="livescores" className="center">
                <SlideDown className={"my-dropdown-slidedown"}>
                <h1 className="neon" data-text="LiveScores">LiveScores</h1>
                    <ul className="listOfMatches"> {this.state.results} </ul>
                    <AnchorLink href='#leaguestats' className="margin header-slide-down-link">
                        <button className="header-slide-down buttonStyle">Move forward!</button>
                    </AnchorLink>
                    {this.state.liveevents}
                </SlideDown>
            </div>
            </section>
        );
    }
}

export default Livescores;