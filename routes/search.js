let express = require("express");
let router = express.Router();
let session = require("express-session");

const { searchController } = require("../controller");

router.post("/email", searchController.searchEmail.post);
router.post("/password", searchController.searchPassword.post);
router.post("/overlapEmail", searchController.overlapEmail.post);

module.exports = router;
