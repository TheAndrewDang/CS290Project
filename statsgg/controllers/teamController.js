const Team = require("../models/team");

exports.teamList = async function (req, res, next) {
    try {
        let teamList = await Team.find().sort("name").exec();
        res.render("teamList.ejs", { teamList});
    } catch(err){
        next(err);
    }
};


exports.teamById = async function (req, res, next) {
    try {
        let team = await Team.findById(req.params.id)
        res.render("teamSingle.ejs", team);
    } catch(err){
        next(err);
    }
};

exports.teamSingle = async function (req, res, next) {
    try {
        let team = await Team.findById(req.params.id)
        .populate("game").exec();

        console.log(team);
        console.log(team.teamName);
        console.log(team.url);
        console.log(team._id);
        console.log(team.game);

        res.render("teamSingle.ejs", {team});
    }

    catch (error) {
        next(error);
    }
};
exports.teamDelete = async function (req, res, next) {
  try {
    await Team.findByIdAndDelete(req.params.id).exec();
    res.redirect("/teams/");
  } catch (error) {
    next(error);
  }
};
  
  exports.teamCreate = async function (req, res, next) {
    try {
      let team = new Team({});
      res.render("teamForm.ejs", {
        title: "ADD A TEAM",
         teams: team,
      });
    } catch (error) {
      next(error);
    }
  };
  exports.teamUpdate = async function (req, res, next) {
    try {
      let team = await Team.findById(req.params.id).exec();
      let teams = await Team.find().select("teamName").exec();
  
      res.render("teamForm.ejs", {
        title: "Update " + team.title,
        game: game,
        teams: teams,
        allPlatforms: allPlatforms,
      });
    } catch (err) {
      next(err);
    }
  };

  exports.teamPost = async function (req, res, next) {
    try {
      let team = await Team.findById(req.params.id).exec();
  
      if (team === null) {
        team = new Team({ _id: req.body.id });
      }
  
      //Updates or creates the data given by the form
      team.teamName = req.body.teamName;
      team.created = req.body.created;
      team.championshipWins = req.body.championshipWins;
      team.active = req.body.active;
      team.totalPlayers = req.body.totalPlayers;
  
      team.save().then((team) => {
        res.redirect(team.url);
      });
    } catch (error) {
      next(error);
    }
  };

  
  