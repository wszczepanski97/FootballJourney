import React, { Component } from 'react';
import 'views/App.css';
import './LeagueStats.css';
import PropTypes from 'prop-types';
import LeagueList from 'components/LeagueList/LeagueList';
import LeagueTable from 'components/LeagueTable/LeagueTable';
import LeagueFixtures from 'components/LeagueFixtures/LeagueFixtures';
import { connect } from 'react-redux';
import NeonHeading from '../NeonHeading/NeonHeading';

class LeagueStats extends Component {
  state = {};

  render() {
    const { view } = this.props;
    return (
      <>
        <NeonHeading>League Stats</NeonHeading>
        {view === 'leagueList' && <LeagueList />}
        {view === 'leagueTable' && <LeagueTable />}
        {view === 'leagueFixtures' && <LeagueFixtures />}
      </>
    );
  }
}
const mapStateToProps = ({ leagueStatsView }) => ({ view: leagueStatsView });

LeagueStats.propTypes = {
  view: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(LeagueStats);
