const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.use(express.static("public"));
app.use("/*", (req, res) => {
   res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose
   .connect(
      "mongodb+srv://sahilansarimondal:sahil1234@sahildb.jqkiszf.mongodb.net/Courses"
   )
   .then(() => {
      console.log("MongoDB connected");
   })
   .catch((e) => {
      console.log(e);
   });

app.listen(3000, () => console.log("Server running on port 3000"));
