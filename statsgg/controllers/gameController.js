// -----------LOAD MODELS & ROUTES-------------

//Imports the game Schema type for use
const Game = require("../models/game");
const player = require("../models/player");
const Team = require("../models/team");

// -----------CONTROLLERS FOR THE ROUTES-------------
/** ALL ROUTES USE TRY & CATCH TO HANDLE POTENTIAL ERROS */
const allPlatforms = [
  "Windows",
  "Mac",
  "Linux",
  "Xbox Series X",
  "Xbox One",
  "Xbox 360",
  "Playstation 5",
  "Playstation 4",
  "Playstation 3",
  "Nintendo Switch",
  "iOS",
  "Android",
];

exports.gameList = async function (req, res, next) {
  try {
    let gameList = await Game.find().sort("title");
    res.render("gameMain.ejs", { gameList });
  } catch (error) {
    next(error);
  }
};

exports.gameSingle = async function (req, res, next) {
  try {
    let gameSingle = await Game.findById(req.params.id)
      .populate("team")
      .populate("player")
      .exec();
    res.render("gameSingle.ejs", { gameSingle });
  } catch (error) {
    next(error);
  }
};

exports.gameDelete = async function (req, res, next) {
  try {
    await Game.findByIdAndDelete(req.params.id).exec();
    res.redirect("/games/");
  } catch (error) {
    next(error);
  }
};

exports.gameCreate = async function (req, res, next) {
  try {
    let game = new Game({}); //Game is empty
    let teams = await Team.find().select("teamName").exec();
    let players = await player.find().select("inGameName").exec();

    res.render("gameForm.ejs", {
      title: "Create a Game",
      game: game,
      teams: teams,
      players: players,
      allPlatforms: allPlatforms,
    });
  } catch (error) {
    next(error);
  }
};
exports.gameUpdate = async function (req, res, next) {
  try {
    let game = await Game.findById(req.params.id).exec();
    let teams = await Team.find().select("teamName").exec();
    let players = await player.find().select("inGameName").exec();

    res.render("gameForm.ejs", {
      title: "Update " + game.title,
      game: game,
      teams: teams,
      players: players,
      allPlatforms: allPlatforms,
    });
  } catch (err) {
    next(err);
  }
};
//This handles either the creation or update of a Game schema
exports.gamePost = async function (req, res, next) {
  try {
    let game = await Game.findById(req.params.id).exec();

    if (game === null) {
      game = new Game({ _id: req.body.id });
    }

    //Updates or creates the data given by the form
    game.title = req.body.title;
    game.numFollowers = req.body.numFollowers;
    game.genre = req.body.genre;
    game.releaseDate = req.body.releaseDate;
    game.platforms = req.body.platforms;
    game.team = req.body.teams;
    console.log(req.files.filename);
    if (!game.img && !game.img2) {
      game.img = req.files[0].filename;
      game.img2 = req.files[1].filename;
    }
    game.players = req.body.players;

    game.save().then((game) => {
      res.redirect(game.url);
    });
  } catch (error) {
    next(error);
  }
};
