const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");
const cors = require("cors");

app.use(
  cors({
    origin: ["https://get-todo.com", "http://localhost:3000"],
    methods: ["GET", "POST", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
const indexRouter = require("./routes/index");
const searchRouter = require("./routes/search");

app.use("/", indexRouter);
app.use("/searchinfo", searchRouter);

// get, post
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// 서버 실행
app.listen(port, () => {
  console.log(`fin.k.l(c) listening at http://localhost:${port}`);
});
