const initialState = {
  leagueStatsView: 'leagueList',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LEAGUE_STATS_VIEW':
      return {
        leagueStatsView: action.payload.view,
      };
    default:
      return state;
  }
};

export default rootReducer;
