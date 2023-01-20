import UserDetails from "../../Model/Model.js";

export const AddUser = function (req, res) {
  const { FirstName, LastName, Email, Role, Password } = req.body;
  UserDetails.findOne({ Email: Email }, (error, user) => {
    if (user) {
      res.send({ message: "user already Present" });
    } else {
      const user = new UserDetails({
        FirstName,
        LastName,
        Email,
        Role,
        Password,
      });
      user.save((error) => {
        if (error) {
          res.send(error);
        } else {
          res.send({ message: "successfully Register" });
        }
      });
    }
  });
};
