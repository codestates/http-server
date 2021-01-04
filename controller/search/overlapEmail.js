const { User } = require("../../models");

module.exports = {
  post: (req, res) => {
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((result) => {
        if (result) {
          res.status(202).send("이미 존재하는 Email입니다.");
        } else {
          res.status(200).send("사용 가능한 Email입니다.");
        }
      })
      .catch((err) => res.status(500).send(err));
  },
};
