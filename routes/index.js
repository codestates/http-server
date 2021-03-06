const express = require("express");
const router = express.Router();
const { indexController } = require("../controller");
const cors = require("cors");

router.post("/postMain", indexController.main.post);
router.patch("/editMain", indexController.main.patch);
// router.get("/getMain", indexController.main.get);
router.post("/getMain", indexController.main2.post);
router.post("/signup", indexController.signup.post);
router.get("/getMypage", indexController.mypage.get);
router.post("/postMypage", indexController.mypage.post);
router.post("/completed", indexController.completed.post);
router.patch("/completed", indexController.completed.patch);
router.post("/important", indexController.important.post);
router.patch("/important", indexController.important.patch);
router.get("/signout", indexController.signout.get);
router.post("/remove", indexController.remove.post);
router.patch("/update", indexController.update.patch);
router.get("/github", indexController.signin.github);
router.get("/githubLogin", indexController.signin.githubLogin);
router.post("/signin", indexController.signin.post);
// router.post('/signinMain', indexController.signinMain.post);

module.exports = router;
