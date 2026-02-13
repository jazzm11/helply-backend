const router = require("express").Router();

const controller = require("../controllers/default_controllers");

router.get("/sixLatest", controller.send_out_ticket);

module.exports = router;
