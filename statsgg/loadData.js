var ObjectId = require("mongodb").ObjectId;

const teamList = [
  {
    teamName: "Cloud 9",
    created: Date.parse("2013-01-01"),
    championshipWins: 4,
    active: true,
    totalPlayers: 5,
  },
  {
    teamName: "TSM",
    created: Date.parse("2013-09-01"),
    championshipWins: 7,
    active: true,
    totalPlayers: 5,
  },
  {
    teamName: "Team Liquid",
    created: Date.parse("2000-01-01"),
    championshipWins: 4,
    active: true,
    totalPlayers: 5,
  },
  {
    teamName: "100Theives",
    created: Date.parse("2017-11-20"),
    championshipWins: 0,
    active: true,
    totalPlayers: 5,
  },
  {
    teamName: "NRG",
    created: Date.parse("2015-11-16"),
    championshipWins: 5,
    active: true,
    totalPlayers: 5,
  },
  {
    teamName: "CLG",
    created: Date.parse("2012-11-16"),
    championshipWins: 3,
    active: true,
    totalPlayers: 3,
  },
  {
    teamName: "Faze Clan",
    created: Date.parse("2008-11-16"),
    championshipWins: 5,
    active: true,
    totalPlayers: 5,
  },
  {
    teamName: "Sentinels",
    created: Date.parse("2008-11-16"),
    championshipWins: 5,
    active: true,
    totalPlayers: 5,
  },
];

const playerList = [
    //League of Legends: Team Liquid
    {
        inGameName: "CoreJJ",
        firstName: "Jo",
        lastName: "Yong-in",
        KDA: 4.3,
        earnings: 589421.17,
        numGamesPlayed: 528,
        image: "corejj_portrait.png",

        teamName: "Team Liquid",
        gameName: "League of Legends",
    },
    {
        inGameName: "Tactical",
        firstName: "Edward",
        lastName: "Ra",
        KDA: 4.5,
        earnings: 54261.3,
        numGamesPlayed: 154,
        image: "tactical_portrait.png",

        teamName: "Team Liquid",
        gameName: "League of Legends",
    },
    {
        inGameName: "Alphari",
        firstName: "Barney",
        lastName: "Morris",
        KDA: 3.5,
        earnings: 121920.85,
        numGamesPlayed: 310,
        image: "alphari_portrait.png",

        teamName: "Team Liquid",
        gameName: "League of Legends",
    },
    {
        inGameName: "Santorin",
        firstName: "Lucas",
        lastName: "Larsen",
        KDA: 3.5,
        earnings: 121920.85,
        numGamesPlayed: 310,
        image: "santorin_portrait.png",

        teamName: "Team Liquid",
        gameName: "League of Legends",
    },
    {
        inGameName: "Jensen",
        firstName: "Nicolaj",
        lastName: "Jensen",
        KDA: 3.5,
        earnings: 121920.85,
        numGamesPlayed: 310,
        image: "jensen_portrait.png",

        teamName: "Team Liquid",
        gameName: "League of Legends",
    },

    //League of Legends: TSM
    {
        inGameName: "tsm1",
        firstName: "tsm",
        lastName: "player1",
        KDA: 1.6,
        earnings: 500000.17,
        numGamesPlayed: 52,
        image: "default_portrait.png",

        teamName: "TSM",
        gameName: "League of Legends",
    },
    {
        inGameName: "tsm2",
        firstName: "tsm",
        lastName: "player2",
        KDA: 1.6,
        earnings: 500000.17,
        numGamesPlayed: 52,
        image: "default_portrait.png",

        teamName: "TSM",
        gameName: "League of Legends",
    },
    {
        inGameName: "tsm3",
        firstName: "tsm",
        lastName: "player3",
        KDA: 5.6,
        earnings: 500000.17,
        numGamesPlayed: 52,
        image: "default_portrait.png",

        teamName: "TSM",
        gameName: "League of Legends",
    },
    {
        inGameName: "tsm4",
        firstName: "tsm",
        lastName: "player4",
        KDA: 8.6,
        earnings: 900000.17,
        numGamesPlayed: 452,
        image: "default_portrait.png",

        teamName: "TSM",
        gameName: "League of Legends",
    },
    {
        inGameName: "tsm5",
        firstName: "tsm",
        lastName: "player5",
        KDA: 1.6,
        earnings: 500000.17,
        numGamesPlayed: 52,
        image: "default_portrait.png",

        teamName: "TSM",
        gameName: "League of Legends",
    },

    //Apex Legends: NRG
    {
        inGameName: "nrg1",
        firstName: "nrg",
        lastName: "player1",
        KDA: 2.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "NRG",
        gameName: "Apex",
    },
    {
        inGameName: "nrg2",
        firstName: "nrg",
        lastName: "player2",
        KDA: 2.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "NRG",
        gameName: "Apex",
    },
    {
        inGameName: "nrg3",
        firstName: "nrg",
        lastName: "player3",
        KDA: 2.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "NRG",
        gameName: "Apex",
    },
    {
        inGameName: "nrg4",
        firstName: "nrg",
        lastName: "player4",
        KDA: 2.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "NRG",
        gameName: "Apex",
    },
    {
        inGameName: "nrg5",
        firstName: "nrg",
        lastName: "player5",
        KDA: 2.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "NRG",
        gameName: "Apex",
    },

    //Apex Legends: Cloud 9
    {
        inGameName: "cloud91",
        firstName: "cloud9",
        lastName: "player1",
        KDA: 2.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Cloud 9",
        gameName: "Apex",
    },
    {
        inGameName: "cloud92",
        firstName: "cloud9",
        lastName: "player2",
        KDA: 2.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Cloud 9",
        gameName: "Apex",
    },
    {
        inGameName: "cloud93",
        firstName: "cloud9",
        lastName: "player3",
        KDA: 5.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Cloud 9",
        gameName: "Apex",
    },
    {
        inGameName: "cloud94",
        firstName: "cloud9",
        lastName: "player4",
        KDA: 6.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Cloud 9",
        gameName: "Apex",
    },
    {
        inGameName: "cloud95",
        firstName: "cloud9",
        lastName: "player5",
        KDA: 2.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Cloud 9",
        gameName: "Apex",
    },

    //Valorant: Sentinels
    {
        inGameName: "sentinels1",
        firstName: "sentinels",
        lastName: "player1",
        KDA: 23.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Sentinels",
        gameName: "Valorant",
    },
    {
        inGameName: "sentinels2",
        firstName: "sentinels",
        lastName: "player2",
        KDA: 2.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Sentinels",
        gameName: "Valorant",
    },
    {
        inGameName: "sentinels3",
        firstName: "sentinels",
        lastName: "player3",
        KDA: 3.6,
        earnings: 5000.17,
        numGamesPlayed: 233,
        image: "default_portrait.png",

        teamName: "Sentinels",
        gameName: "Valorant",
    },
    {
        inGameName: "sentinels4",
        firstName: "sentinels",
        lastName: "player4",
        KDA: 3.4,
        earnings: 5000.17,
        numGamesPlayed: 55,
        image: "default_portrait.png",

        teamName: "Sentinels",
        gameName: "Valorant",
    },
    {
        inGameName: "sentinels5",
        firstName: "sentinels",
        lastName: "player5",
        KDA: 23.6,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Sentinels",
        gameName: "Valorant",
    },

    //Valorant: CLG
    {
        inGameName: "clg1",
        firstName: "clg",
        lastName: "player1",
        KDA: 1.1,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "CLG",
        gameName: "Valorant",
    },
    {
        inGameName: "clg2",
        firstName: "clg",
        lastName: "player2",
        KDA: 1.2,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "CLG",
        gameName: "Valorant",
    },
    {
        inGameName: "clg3",
        firstName: "clg",
        lastName: "player3",
        KDA: 3.1,
        earnings: 55000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "CLG",
        gameName: "Valorant",
    },
    {
        inGameName: "clg4",
        firstName: "clg",
        lastName: "player4",
        KDA: 4.4,
        earnings: 55000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "CLG",
        gameName: "Valorant",
    },
    {
        inGameName: "clg5",
        firstName: "clg",
        lastName: "player5",
        KDA: 1.1,
        earnings: 500550.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "CLG",
        gameName: "Valorant",
    },

    //CSGO: FaZe
    {
        inGameName: "fazeclan1",
        firstName: "fazeclan",
        lastName: "player1",
        KDA: 99.1,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Faze Clan",
        gameName: "CSGO",
    },
    {
        inGameName: "fazeclan2",
        firstName: "fazeclan",
        lastName: "player2",
        KDA: 92.1,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Faze Clan",
        gameName: "CSGO",
    },
    {
        inGameName: "fazeclan3",
        firstName: "fazeclan",
        lastName: "player3",
        KDA: 99.1,
        earnings: 3333333.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Faze Clan",
        gameName: "CSGO",
    },
    {
        inGameName: "fazeclan4",
        firstName: "fazeclan",
        lastName: "player4",
        KDA: 99.1,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Faze Clan",
        gameName: "CSGO",
    },
    {
        inGameName: "fazeclan5",
        firstName: "fazeclan",
        lastName: "player5",
        KDA: 99.1,
        earnings: 5000.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "Faze Clan",
        gameName: "CSGO",
    },

    //CSGO: 100 Thieves
    {
        inGameName: "100thieves1",
        firstName: "100thieves",
        lastName: "player1",
        KDA: 9.1,
        earnings: 50.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "100Theives",
        gameName: "CSGO",
    },
    {
        inGameName: "100thieves2",
        firstName: "100thieves",
        lastName: "player2",
        KDA: 9.1,
        earnings: 50.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "100Theives",
        gameName: "CSGO",
    },
    {
        inGameName: "100thieves3",
        firstName: "100thieves",
        lastName: "player3",
        KDA: 9.1,
        earnings: 50.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "100Theives",
        gameName: "CSGO",
    },
    {
        inGameName: "100thieves4",
        firstName: "100thieves",
        lastName: "player4",
        KDA: 9.1,
        earnings: 50.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "100Theives",
        gameName: "CSGO",
    },
    {
        inGameName: "100thieves5",
        firstName: "100thieves",
        lastName: "player5",
        KDA: 9.1,
        earnings: 50.17,
        numGamesPlayed: 2,
        image: "default_portrait.png",

        teamName: "100Theives",
        gameName: "CSGO",
    },
    
];

const gameList = [
  {
    title: "League of Legends",
    numFollowers: 4033548,
    genre: ["Multiplayer Online Battle Arena (MOBA)"],
    releaseDate: "2009-10-27",
    platforms: ["Windows", "Mac"],
    img: "League of Legends.jpg",
    img2: "2League of Legends.jpg",
  },
  {
    title: "Valorant",
    numFollowers: 3000000,
    genre: ["First-Person Shooter", "Tactical Shooter"],
    releaseDate: "2020-06-02",
    platforms: ["Windows"],
    img: "Valorant.jpg",
    img2: "2Valorant.jpg",
  },
  {
    title: "Apex",
    numFollowers: 100000000,
    genre: ["Battle Royale", "First-Person Shooter"],
    releaseDate: "2019-02-04",
    platforms: ["Windows", "Playstation 4", "Xbox One", "Nintendo Switch"],
    img: "Apex.jpg",
    img2: "2Apex.jpg",
  },
  {
    title: "CSGO",
    numFollowers: 24000000,
    genre: ["First-Person Shooter", "Tactical Shooter"],
    releaseDate: "2012-08-21",
    platforms: ["Windows", "Mac", "Linux", "Xbox 360", "Playstation 3"],
    img: "CSGO.jpg",
    img2: "2CSGO.jpg",
  },
];

const userList = [
  {
    userName: "PoyoPoak",
    realName: "Peter Luey",
    country: "United States",
    description:
      "~Eyo, welcome to my profile. My name is Peter Luey, and I am an avid gamer who plays Apex Legends for OSU's esports team. I am also a polymath with various interests and skills. At this point, I'm not too sure what else to put in my profile description so I am rambling on to create filler for my profile so the description portion does not look nearly as empty. Feel free too look around! :)",
    dateJoined: Date.parse("2001-05-25"),
  },
  {
    userName: "andrevv",
    realName: "Andrew Dang",
    country: "United States",
    description: "I like csgo.",
    dateJoined: Date.parse("2020-05-26"),
  },
  {
    userName: "Dren",
    realName: "Derek Renzema",
    country: "United States",
    description: "Im not sure what Derek likes to play",
    dateJoined: Date.parse("2015-05-27"),
  },
  {
    userName: "sohcheewata",
    realName: "Nathan Klump",
    country: "United States",
    description: "I play League of Legends.",
    dateJoined: Date.parse("2021-05-28"),
  },
];

//Connect to DB with Mongoose
const dbCredentials = require("./dbCredentials.js");
const mongoose = require("mongoose");
mongoose.connect(dbCredentials.connection_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Load our models
const Team = require("./models/team.js");
const User = require("./models/user.js");
const Player = require("./models/player.js");
const Game = require("./models/game.js");

async function loadAll() {
    //Deletes all existing schema data

    console.log("Calling loadAll()...");

    await User.deleteMany();
    await Player.deleteMany();
    await Team.deleteMany();
    await Game.deleteMany();

    //Arrays to hold schemas
    const teamRecords = [];
    const playerRecords = [];
    const userRecords = [];
    const gameRecords = [];

    //-----v-------||| MUST BE *BEFORE* CREATING RELATIONSHIPS |||---------------v------------------//

    /*------------- SETS UP ALL SCHEMA ARRAYS FOR LATER USE -----------*/
    //In charge of uploading all of the user data
    for (let userItem of userList) {
        userRecords.push(new User(userItem));
    }

    //In charge of uploading all of the game data
    for (let gameItem of gameList) {
        gameRecords.push(new Game(gameItem));
    }

    //In charge of uploading all of the player data
    for (let playerItem of playerList) {
        playerRecords.push(new Player(playerItem));
    }


    //In charge of uploading all of the team data
    for (let teamItem of teamList) {
        teamRecords.push(new Team(teamItem));
    }

    //-----^-------||| MUST BE *BEFORE* CREATING RELATIONSHIPS |||-------------^---------------------//

    
    /*------------- LOADS USER RELATIONSHIPS TO INDIVIDUAL MODELS & ALSO LOADS DATA -----------*/
    for (let i = 0; i < userRecords.length; i++) {
        const userRecord = userRecords[i];
        // userRecords.push(userRecord);

        teamRecords.forEach(function (team, index, array) {
            userRecord.favoriteTeam[index] = team._id;
            // console.log("from loadData- team.id: " + team.id);
        });

        playerRecords.forEach(function (player, index, array) {
            userRecord.favoritePlayer[index] = player._id;
            // console.log("from loadData- team.id: " + team.id);
        });

        gameRecords.forEach(function (game, index, array) {
            userRecord.gamesPlay[index] = game._id;
            // console.log("from loadData- team.id: " + team.id);
        });

        await userRecord.save(); //Saves the data to the database(MongoDB)
    }
    console.log("Done loading user");

    /*------------- LOADS PLAYER RELATIONSHIPS TO INDIVIDUAL MODELS & ALSO LOADS DATA -----------*/
    for (let i = 0; i < playerRecords.length; i++) {
        const playerRecord = playerRecords[i];

        //load team into player
        teamRecords.forEach(function (team, index, array) {
            if (team.teamName == playerRecord.teamName) {
                playerRecord.team = team._id;
                // console.log("from loadData- team.id: " + team.id);
            }
            else if (!playerRecord.team){
                console.log("team not listed");
                // console.log("team.teamName: " + team.teamName);
                // console.log("playerRecord.teamName: " + playerRecord.teamName);
            } 
        });
        // console.log("Done loading team into player");

        //load game into player
        gameRecords.forEach(function (game, index, array) {
            if (game.title == playerRecord.gameName) {
                playerRecord.game = game._id;
                // console.log("from loadData- game.id: " + game.id);
                // console.log("playerRecord.gameName: " + playerRecord.gameName);
            }
            else if (!playerRecord.game) {
                console.log("game not listed");
                // console.log("game.title: " + game.title);
                // console.log("playerRecord.gameName: " + playerRecord.gameName);
            }
        });
        // console.log("Done loading game into player");

        //load users into player
        userRecords.forEach(function (user, index, array) {
            playerRecord.followedUsers[index] = user._id;
            // console.log("from loadData- user.id: " + user.id);
        });
        // console.log("Done loading users into player");

        // console.log("from loadData- playerRecord: " + playerRecord);

        await playerRecord.save();
        // console.log("Saved player to MongoDb. playerRecord: " + playerRecord);
    }
    console.log("Done loading player");

    /*------------- LOADS TEAM RELATIONSHIPS TO INDIVIDUAL MODELS & ALSO LOADS DATA -----------*/
    for (let i = 0; i < teamRecords.length; i++) {
        const teamRecord = teamRecords[i];

        gameRecords.forEach(function (game, index, array){
            teamRecord.game[index] = game._id;
        });

        await teamRecord.save();
    }
    
    console.log("Done loading teams");

    /*------------- LOADS GAME RELATIONSHIPS TO INDIVIDUAL MODELS & ALSO LOADS DATA -----------*/
    for (let i = 0; i < gameRecords.length; i++) {
        const gameRecord = gameRecords[i];

        //Loads Team schema ids into Game schema
        teamRecords.forEach(function (team, index, array) {
            gameRecord.team[index] = team._id;
        });

        //Loads Player schema ids into Game Schema
        playerRecords.forEach(function (player, index, array) {
            gameRecord.player[index] = player._id;
        });
        await gameRecord.save();
    }
    console.log("Done loading game");

    console.log("All objects loaded. Closing connection...");

    mongoose.connection.close();
}

//Make it happen
loadAll();
