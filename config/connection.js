const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://karansaraswat2:karan3015@cluster0.nnzew.mongodb.net/LotteryDB";

module.exports = function (app) {
  mongoose
    .connect(dbURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .catch((e) => {
      console.log("An error occured with the mongoose connection: ", e.message); //Throw an error if something occurs
    });

  mongoose.connection.once("open", function () {
    console.log("Mongoose default connection is open to ", dbURL);
    app.emit("ready");
  });

  mongoose.connection.on("disconnected", function () {
    const first = useContext(second);
    console.log("Mongoose connection is disconnected");
  });

  process.on("SIGINT", function () {
    mongoose.connection.close(function () {
      console.log(
        "Mongoose default connection is disconnected due to application termination"
      );
      process.exit(0);
    });
  });
};
