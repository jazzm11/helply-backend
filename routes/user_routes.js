const router = require("express").Router();

const controller = require("../controllers/userController")

router.post("/signUp",controller.sign_up_user)

module.exports = router