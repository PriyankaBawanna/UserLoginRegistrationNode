import UserDetails from "../../Model/Model.js";
export const CheckCredentials = () => {
  UserDetails.findOne({ Email: Email }, (err, user) => {
    if (user) {
      if (
        user.Role === user.Role &&
        Password === user.Password &&
        Email === user.Email
      ) {
        /*email Password and Role everything are match*/
        res.send(true);
      } else {
        /*One thing is not Match */
        res.send(false);
      }
    }
  });
};
