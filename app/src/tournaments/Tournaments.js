import TournamentsDataService from 'src/tournaments/services/TournamentsDataService';

import TournamentsList from 'src/tournaments/components/list/TournamentsList';
import TournamentDetails from 'src/tournaments/components/details/TournamentDetails';

// Define the Angular 'tournaments' module

export default angular
  .module("tournaments", ['ngMaterial'])

  .component(TournamentsList.name, TournamentsList.config)
  .component(TournamentDetails.name, TournamentDetails.config)

  .service("TournamentsDataService", TournamentsDataService);
