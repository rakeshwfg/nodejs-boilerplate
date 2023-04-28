const router = require("express").Router();

const userController = require("../controllers/userController");


router.post("/", userController.signUp);
router.post("/signup", userController.signUp);

router.post("/login", userController.login);

router.patch("/:userId", userController.updateUser);

router.delete("/:userId", userController.deleteUser);

router.get("/data", userController.data);

module.exports = router;
