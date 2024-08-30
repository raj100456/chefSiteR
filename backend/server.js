const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5001;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://enactonchefmattraj.vercel.app",
      "https://enactonchefmattraj.vercel.app/menupage",
    ],
    credentials: true,
  })
);
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://patelrajkumar579:2UWv8Pjp0EKUonGD@profilefyi.4azmu.mongodb.net/?retryWrites=true&w=majority&appName=profilefyi",
  {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
  }
);

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Email = mongoose.model("Email", emailSchema);

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).send("Subscribed successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error subscribing");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
