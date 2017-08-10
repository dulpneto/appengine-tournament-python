function AppController(TournamentsDataService, $mdSidenav) {
  var self = this;

  self.selected           = null;
  self.tournaments        = [ ];
  self.selectTournament   = selectTournament;
  self.toggleList         = toggleTournamentsList;

  // Load all registered tournaments

  TournamentsDataService
        .loadAllTournaments()
        .then( function( tournaments ) {
          self.tournaments    = [].concat(tournaments);
          self.selected = tournaments[0];

          TournamentsDataService
            .loadTournamentDetails(self.selected)
            .then( function( details ) {
              self.details = details;
            });
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleTournamentsList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectTournament ( tournament ) {
    self.selected = angular.isNumber(tournament) ? $scope.tournaments[tournament] : tournament;

    TournamentsDataService
        .loadTournamentDetails(self.selected)
        .then( function( details ) {
          self.details = details;
        });
  }
}

export default [ 'TournamentsDataService', '$mdSidenav', AppController ];
