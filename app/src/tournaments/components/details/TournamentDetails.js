import TournamentDetailsController from './TournamentDetailsController'

export default {
  name : 'tournamentDetails',
  config : {
    bindings         : {  selected: '<', details: '<' },
    templateUrl      : 'src/tournaments/components/details/TournamentDetails.html',
    controller       : [ '$mdBottomSheet', '$log', TournamentDetailsController ]
  }
};