const User = require("../models/user");
const Team = require("../models/team");

exports.userList = async function (req, res, next) {
    try {
        let userList = await User.find().sort("name").exec();
        res.render("userList.ejs", { userList });
    } catch (err) {
        next(err);
    }
};

exports.userById = async function (req, res, next) {
    try {
        let user = await User.findById(req.params.id)
                            .populate("favoritePlayer")
                            .populate("favoriteTeam")
                            .populate("gamesPlay")
                            .exec();
        res.render("userSingle.ejs", { user });
    } catch (err) {
        next(err);
    }
};

exports.userCreate = async function (req, res, next) {
    try {
      let user = new User({}); //Game is empty
      let teams = await Team.find().select("teamName").exec();
      res.render("userForm.ejs", {
        title: "Create a User",
        user: user,
        teams: teams,
      });
    } catch (error) {
      next(error);
    }
  };

exports.userDelete = async function (req, res, next) {
    try {
        await User.findByIdAndDelete(req.params.id).exec();
        res.redirect("/users/");
    } catch (error) {
        next(error);
    }
};