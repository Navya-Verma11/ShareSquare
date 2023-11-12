const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;


//Router is express router . Handle routes 
//.post handles post requests , /signup handles signup forwarded to handleUserSignup 
//It creates a new user on the db 
//Authentication : jwt token is used for authetication ; secret key ; cookie based authentication