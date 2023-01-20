import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017/UserRegistration",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Data Base is connected");
  }
);
