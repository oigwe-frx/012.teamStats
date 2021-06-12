const team = {
  _players: [
    {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
}, {
  firstName: 'Brian',
  lastName: 'William',
  age: 11
}, {
  firstName: 'Chris',
  lastName: 'Hayes',
  age: 11
},
], //end of ._players
  _games: [
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},{
  opponent: 'Bulls',
  teamPoints: 50,
  opponentPoints: 127
}, {
  opponent: 'Nets',
  teamPoints: 110,
  opponentPoints: 17
}
], //end of ._games

//Getters
//No setters are created because we don’t want anyone to change the values saved to these keys.
get players(){
  if(this._players){
      return this._players
  } else { return 'No player names in out roster'}
},
get games() {
  if(this._games){
  return this._games
  } else { return 'No games have been played this season'}
},


//Methods

//Method used to add a new player to the team
addPlayer(firstName, lastName, age) {
  const player = {
    firstName,
    lastName,
    age,
  }

  this._players.push(player)
},

//Method used to add a new game to the team's play history
addGame(opponent, teamPoints, opponentPoints) {
  const game = {
    opponent,
    teamPoints,
    opponentPoints,
  }

  this._games.push(game)

}
};

team.addGame('Hornets', 35, 50);
team.addPlayer('Ari', 'Melber', 11);
console.log(team.players);
console.log(team.games);
