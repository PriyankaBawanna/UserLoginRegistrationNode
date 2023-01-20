import UserDetails from "../../Model/Model.js";
import { CheckCredentials } from "./Credentials.js";
export const LogginUser = async (req, res) => {
  var { Role, Email } = req.body;

  UserDetails.findOne({ Email: Email }, (err, user) => {
    if (user) {
      /*user email is match */
      switch (Role) {
        case "Admin":
          if (user) {
            CheckCredentials();
          }

          break;
        case "Customer":
          if (user) {
            CheckCredentials();
          }

          break;

        default:
          res.send({ message: "No User Found " });
      }
    } else {
      /*"No UserEmail Match "*/
      res.send({ message: "Please Check your Credentials " });
    }
  });
};
