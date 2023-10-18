const e = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var teamSchema = new Schema ({
  game: [{ type: Schema.Types.ObjectId, ref: "Game", required: true }],
  teamName: {type: String, require: true},
  created: {type: Date, require: true},
  championshipWins: {type: Number, require: true},
  active: {type: Boolean, require: true},
  totalPlayers: {type: Number, require: true}
});

teamSchema.virtual("url").get(function(){
  return "/teams/id/" + this._id;
});

teamSchema.virtual("year_date").get(function () {
  const date = this.created;
  let dateString = date.getFullYear();
  return dateString;
});

teamSchema.virtual("currentlyActive").get(function (){
  const acti = this.active;
  let activeYN = "NO";
  if ( acti === true){
    activeYN = "YES";
  }
  return activeYN;
});

teamSchema.virtual("gameOf").get(async function () {
  const Game = require("./game");
  let gameArray = await Game.find().where("team").equals(this._id).and
  return gameArray;
});

module.exports = mongoose.model("Team", teamSchema);
