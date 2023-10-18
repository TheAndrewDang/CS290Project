const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  inGameName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  team: [{ type: Schema.Types.ObjectId, ref: "Team", required: true }],
  game: [{ type: Schema.Types.ObjectId, ref: "Game", required: true }],
  followedUsers: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  KDA: { type: Number, required: true },
  earnings: { type: Number, required: true },
  numGamesPlayed: { type: Number, required: true },
  image: { type: String, required: false  },
  
  //for storing a single team and game
  teamName: { type: String, required: false },
  gameName: { type: String, required: false },
});

PlayerSchema.virtual("url").get(function () {
  return "/players/id/" + this._id;
});


//First Last
PlayerSchema.virtual("getFullName").get(function () {
  let fullName = this.firstName + " " + this.lastName;
  return fullName;
});

//First "IGN" Last
PlayerSchema.virtual("getConjoinedName").get(function () {
  let conjoinedName =
    this.firstName + ' "' + this.inGameName + '" ' + this.lastName;
  return conjoinedName;
});

//If player from certain game meets criteria, is a top player for that game
PlayerSchema.virtual("isTopPlayer").get(function (gameToCheck) {
  if (gameToCheck == this.game[0] && this.KDA > 1.5) {
    return true;
  } else {
    return false;
  }
});

//If user sent is following, return true
PlayerSchema.methods.userIsFollowing = (function (userIdToFind) {
  console.log("userIdToFind: " + userIdToFind);
  if (this.followedUsers) {
    for (let i = 0; i < this.followedUsers.length; i++) {
      // console.log("this.followedUsers[" + i + "]: " + this.followedUsers[i]);
      // console.log("this.followedUsers[" + i + "]._id: " + this.followedUsers[i]._id);
      if (String(this.followedUsers[i]._id) == String(userIdToFind)) {
        console.log("userIsFollowing method: user match found: " + this.followedUsers[i]);
        return true;
      }
    }
    //finished loop, no match
    console.log("userIsFollowing method: no user match found.");
    return false;
  } 
  
  else {
    console.log("userIsFollowing method: no followedUsers to check.");
    return false;
  }
});

//If player is a player of sent game, return true
PlayerSchema.methods.playerPlaysGame = (function (gameIdToFind) {
  // console.log("gameIdToFind: " + gameIdToFind);
  if (this.game) {
    if (String(this.game[0]._id) == String(gameIdToFind._id)) {
      // console.log("playerPlaysGame method: game match found: " + this.game._id);
      return true;
    }

    //finished loop, no match
    // console.log("playerPlaysGame method: no game match found.");
    return false;
  }
  
  else {
    // console.log("playerPlaysGame method: no game to check.");
    return false;
  }
});


//for relationships with Team and Game
PlayerSchema.virtual("memberOf").get(async function () {
  const Team = require("./team");
  let teamArray = await Team.find().where("teamName").equals(this.teamName);
  return teamArray;
});

PlayerSchema.virtual("playerOf").get(async function () {
  const Game = require("./game");
  let gameArray = await Game.find().where("title").equals(this.gameName);
  return gameArray;
});

module.exports = mongoose.model("Player", PlayerSchema);
