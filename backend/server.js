const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");

// cors options ONLY FOR DEV
// const corsOptions = {
// 	origin: "*",
// 	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));
		// origin: [
		// 	"https://thenorthportbutchershoppe.com",
		// 	"https://staging.thenorthportbutchershoppe.com",
		// 	"http://thenorthportbutchershoppe.com",
		// 	"http://staging.thenorthportbutchershoppe.com",
		// ],
		 // some legacy browsers (IE11, various SmartTVs) choke on 204
// app.use(
// 	cors({
// 		origin: /\.thenorthportbutchershoppe\.com$/,
// 		optionsSuccessStatus: 200,
// 	})
// );

app.use(cors());
app.use(express.json());
require("dotenv").config();

app.use("/staging/server", express.static("public"));

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

// thenorthportbutchershoppe.com/server/...
//require route
app.use("/staging/server", require("./routes/subscribeRoute"));
app.use("/staging/server", require("./routes/contactRoute"));

// live

app.listen(() => {
	console.log("Server started. Listening...");
});

// dev

// const port = 3001;
// app.listen(port, () => {
// 	console.log(`Server started. Listening (Port ${port} )`);
// });
