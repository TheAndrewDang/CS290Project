var express = require("express");
var router = express.Router();
var multer = require("multer");

var playerController = require("../controllers/playerController.js");

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/assets/player_portraits");
    },
    filename: function (req, file, callback) {
        callback(null, `${file.originalname}`); // Creates a unique name for every file
    },
});

var upload = multer({ storage: storage });

router.get("/", playerController.playerList);
router.get("/id/:id", playerController.playerSingle);

router.get("/create/", playerController.create);

router.get("/update/:id", playerController.update_get);

router.post("/update/:id", upload.array("image"), playerController.update_post);

router.get("/delete/:id", playerController.delete);

module.exports = router;
