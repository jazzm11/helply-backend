const router = require("express").Router();

const controller = require("../controllers/userController")

router.post("/signUp",controller.sign_up_user)

router.post("/signIn",controller.sign_in_user)

router.get("/tickets/:user", controller.get_User_Tickets)

module.exports = router