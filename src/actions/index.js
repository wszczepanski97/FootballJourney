export const changeLeagueStatsView = view => {
  return {
    type: 'CHANGE_LEAGUE_STATS_VIEW',
    payload: {
      view,
    },
  };
};
