const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");

const corsOptions = {
	origin: "https://thenorthportbutchershoppe.com",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
require("dotenv").config();

app.use(express.static("public"));

//connect to mongoose
// mongoose
// 	.connect(process.env.DB_URI, {
// 		dbName: process.env.DB_NAME,
// 		user: process.env.DB_USER,
// 		pass: process.env.DB_PASS,

// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useFindAndModify: false,
// 	})
// 	.then((res) => {
// 		console.log("db connected!");
// 	})
// 	.catch((err) => {
// 		console.log("Error:", err);
// 	});

app.use("/", require("./routes/subscribeRoute"));
app.use("/", require("./routes/contactRoute"));

//require route

app.listen();
// app.listen(process.env.PORT, function () {
// 	console.log("express running on " + process.env.PORT);
// });
