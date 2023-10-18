var express = require('express');
var router = express.Router();

const Player = require("../models/player");
const User = require("../models/user");
const Game = require("../models/game");
const Team = require("../models/team");

/* GET player list page. */
exports.playerList = async function (req, res, next) {
    try {
        let playerList = await Player.find().exec();

        let games = await Game.find().select("title").exec();

        //  console.log(playerList);

        res.render("playerList.ejs", { 
            playerList,
            games: games,
        });
    }

    catch (error) {
        next(error);
    }
}

/* GET player single page. */
exports.playerSingle = async function (req, res, next) {
    try {
        let player = await Player.findById(req.params.id)
                                .populate("team", "teamName")
                                .populate("game", "title")
                                .populate("followedUsers", "userName")
                                .exec();

        // console.log("from playerController- player: " + player);
        // console.log("from playerController- player.url: " + player.url);
        // console.log("from playerController- player._id: " + player._id);
        // console.log("from playerController- player.team: " + player.team);

        res.render("playerSingle.ejs", {player});
    }

    catch (error) {
        next(error);
    }
}

exports.create = async function (req, res, next) {
    try {
        let player = new Player({});

        let games = await Game.find().select("title").exec();

        let teams = await Team.find().select("teamName").exec();

        let users = await User.find().select("userName").exec();

        res.render("playerForm.ejs", {
            title: `Add a player`,
            player: player,
            games: games,
            teams: teams,
            users: users,
        });
    }

    catch (error) {
        next(error);
    }
}

exports.update_get = async function (req, res, next) {
    try {
        let player = await Player.findById(req.params.id)
                                .populate("team", "teamName")
                                .populate("game", "title")
                                .populate("followedUsers", "userName")
                                .exec();

        let games = await Game.find().select("title").exec();

        let teams = await Team.find().select("teamName").exec();

        let users = await User.find().select("userName").exec();
        
        res.render("playerForm.ejs", {
            title: `Update ${player.inGameName}`,
            player: player,
            games: games,
            teams: teams,
            users: users,
        });
    }

    catch (error) {
        next(error);
    }
}

exports.update_post = [
    async function (req, res, next) {
        try {
            let player = await Player.findById(req.params.id).populate("team", "teamName")
                                    .populate("game", "title")
                                    .populate("followedUsers", "userName")
                                    .exec();;

            if (player === null) {
                console.log("Existing player not found-- creating a new player");
                player = new Player({
                    _id: req.body.id,
                });
            }
            console.log("Existing player found");

            let games = await Game.find().select("title").exec();

            let teams = await Team.find().select("teamName").exec();

            let users = await User.find().select("userName").exec();

            // console.log("from playerController, update_post- req.body: ");
            // console.log(req.body);

            //replace the existing form data
            player.inGameName = req.body.inGameName;
            player.firstName = req.body.firstName;
            player.lastName = req.body.lastName;
            player.team = req.body.team !== "" ? req.body.team : undefined;
            player.game = req.body.game !== "" ? req.body.game : undefined;
            player.followedUsers = req.body.followedUsers !== "" ? req.body.followedUsers : undefined;
            player.KDA = req.body.KDA;
            player.earnings = req.body.earnings;
            player.numGamesPlayed = req.body.numGamesPlayed;
            if (req.files[0]) {
                player.image = req.files[0].filename;
            }

            player.save()
                .then((player) => {
                    res.redirect("/players/");
                })

                .catch((error) => {
                    console.log(error.message);
                    res.render("playerForm.ejs", {
                        title: `Update ${player.name}`,
                        player: player,
                        games: games,
                        teams: teams,
                        users: users,
                        errors: error.message,
                    });
                })
        }

        catch(error) {
            next(error);
        }
    }
];

exports.delete = async function (req, res, next) {
    try {
        await Player.findByIdAndDelete(req.params.id).exec();

        res.redirect("/players/");
    }

    catch (error) {
        next(error);
    }
}