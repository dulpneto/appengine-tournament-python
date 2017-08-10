
function TournamentsDataService($q) {
  var tournaments = [
    {
      name: 'Agosto',
      avatar: 'svg-1',
      content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    },
    {
      name: 'Setembro',
      avatar: 'svg-2',
      content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
    },
    {
      name: 'Outubro',
      avatar: 'svg-3',
      content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
    },
    {
      name: 'Novembro',
      avatar: 'svg-4',
      content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
    }
  ];

  var tournamentDetails = [
    {
      team: 'Time 1',
      total: 12345,
      rounds: [{id: '1', score: 4353},
               {id: '2', score: 4343},
               {id: '3', score: 333},
               {id: '4', score: 1132}]
    },
    {
      team: 'Time 2',
      total: 12345,
      rounds: [{id: '1', score: 4353},
               {id: '2', score: 4343},
               {id: '3', score: 333},
               {id: '4', score: 1132}]
    },
    {
      team: 'Time 3',
      total: 12345,
      rounds: [{id: '1', score: 4353},
               {id: '2', score: 4343},
               {id: '3', score: 333},
               {id: '4', score: 1132}]
    },
    {
      team: 'Time 4',
      total: 12345,
      rounds: [{id: '1', score: 4353},
               {id: '2', score: 4343},
               {id: '3', score: 333},
               {id: '4', score: 1132}]
    },
    {
      team: 'Time 5',
      total: 12345,
      rounds: [{id: '1', score: 4353},
               {id: '2', score: 4343},
               {id: '3', score: 333},
               {id: '4', score: 1132}]
    }
  ];

  // Promise-based API
  return {
    loadAllTournaments: function() {
      // Simulate async nature of real remote calls
      return $q.when(tournaments);
    },
    loadTournamentDetails: function(tournament) {
      // Simulate async nature of real remote calls
      return $q.when(tournamentDetails);
    }
  };
}

export default ['$q', TournamentsDataService];

