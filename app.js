const express = require("express");
const app = express();

const userRoute = require("./routes/userRouter");

app.use("/user", userRoute);

module.exports = app;
