const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var GameSchema = new Schema({
  title: { type: String, required: true },
  numFollowers: { type: Number, required: true },
  genre: [{ type: String, required: true }],
  releaseDate: { type: Date, default: Date.now() },
  platforms: [{ type: String, required: true }],
  team: [{ type: Schema.Types.ObjectId, ref: "Team", required: true }],
  player: [{ type: Schema.Types.ObjectId, ref: "Player", required: true }],
  img: { type: String },
  img2: { type: String },
});

GameSchema.virtual("url").get(function () {
  return "/games/id/" + this._id;
});

GameSchema.virtual("clean_date").get(function () {
  const date = this.releaseDate;
  let dateString = date.getFullYear();
  return dateString;
});

GameSchema.virtual("correct_date").get(function () {
  const date = this.releaseDate;
  let dateString = date.toISOString();
  dateString = dateString.slice(0, dateString.indexOf("T"));
  return dateString;
});
GameSchema.methods.findPlatforms = function (platform) {
  let bool = false;
  console.log("This platform", platform);
  for (let i = 0; i < this.platforms.length; i++) {
    console.log("Platform at:" + i, this.platforms[i]);
    if (this.platforms[i] === platform) bool = true;
  }
  return bool;
};

GameSchema.methods.findTeams = function (userIdToFind) {
  console.log("userIdToFind: " + userIdToFind);
  if (this.team) {
    for (let i = 0; i < this.team.length; i++) {
      // console.log("this.followedUsers[" + i + "]: " + this.followedUsers[i]);
      // console.log("this.followedUsers[" + i + "]._id: " + this.followedUsers[i]._id);
      if (String(this.team[i]._id) == String(userIdToFind)) {
        console.log(
          "userIsFollowing method: user match found: " + this.team[i]
        );
        return true;
      }
    }
    //finished loop, no match
    console.log("userIsFollowing method: no user match found.");
    return false;
  } else {
    console.log("userIsFollowing method: no followedUsers to check.");
    return false;
  }
};

module.exports = mongoose.model("Game", GameSchema);
