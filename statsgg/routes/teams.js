var express = require('express');
var multer = require("multer");
var router = express.Router();

var teamController = require("../controllers/teamController.js");

// -----------MOLTER SETUP-------------
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./public/assets/teamImages");
    },
    filename: function (req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`); // Creates a unique name for every file
    },
  });
  
  //Use the storage which holds the information of whats going to happen to my image file and assigns it to upload
  var upload = multer({ storage: storage });
  

router.get("/", teamController.teamList);
router.get("/id/:id", teamController.teamById);

var teamController = require("../controllers/teamController");
router.get("/", teamController.teamList);
router.get("/id/:id", teamController.teamSingle);
router.get("/delete/:id", teamController.teamDelete);
router.get("/create", teamController.teamCreate);
router.get("/update/:id", teamController.teamUpdate);
//upload.single must match the exact name from the file type that's in the teamForm
router.post("/update/:id", teamController.teamPost);


module.exports = router;
