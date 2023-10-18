var express = require('express');
var router = express.Router();

var userController = require("../controllers/userController.js");

router.get("/", userController.userList);
router.get("/id/:id", userController.userById);
router.get("/create", userController.userCreate);
router.get("/delete/:id", userController.userDelete);

module.exports = router;