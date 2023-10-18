const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: { type: String, required: true },
    realName: { type: String, required: true  },
    country: { type: String, required: true  },
    description: { type: String },
    dateJoined: { type: Date, required: true },

    favoriteTeam: [{type: Schema.Types.ObjectId, ref: "Team", required: true}],
    favoritePlayer: [{type: Schema.Types.ObjectId, ref: "Player", required: true}],
    gamesPlay: [{type: Schema.Types.ObjectId, ref: "Game", required: true}],

    gamesPlay: [{type: Schema.Types.ObjectId, ref: "Game", required: true}],

    // // // Need to replace with references, for now use strings.
    // followedGames: [{ type: String }],
    // followedPlayers: [{ type: String }],
    // followedTeams: [{ type: String }],

    // friends: [{ type: Schema.Types.ObjectId, ref: "user" }],
    // games: [{ type: String }], // multi dimensional array for hours played? will be needed for total_hours.
});

// URL
UserSchema.virtual("url").get(function () {
    return "/users/id/" + this._id;
});

UserSchema.virtual("clean_date").get(function () {
    const date = this.dateJoined;
    let dateString = date.getFullYear();
    return dateString;
});



//Export model
module.exports = mongoose.model("User", UserSchema);
