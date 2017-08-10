// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name : 'tournamentsList',
  config : {
    bindings         : {  tournaments: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/tournaments/components/list/TournamentsList.html'
  }
};
