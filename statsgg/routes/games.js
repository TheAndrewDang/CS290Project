// -----------EXPRESS SETUP-------------
var express = require("express");
var multer = require("multer");
var router = express.Router();

// -----------MOLTER SETUP-------------
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/assets/gameImages");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`); // Creates a unique name for every file
  },
});

//Use the storage which holds the information of whats going to happen to my image file and assigns it to upload
var upload = multer({ storage: storage });

// -----------ROUTES -------------
//Imports the game controller for route to handle
var gameController = require("../controllers/gameController");

router.get("/", gameController.gameList);

router.get("/id/:id", gameController.gameSingle);

router.get("/delete/:id", gameController.gameDelete);

router.get("/create", gameController.gameCreate);

router.get("/update/:id", gameController.gameUpdate);

//upload.single must match the exact name from the file type that's in the gameForm
router.post("/update/:id", upload.array("image", 2), gameController.gamePost);

module.exports = router;
