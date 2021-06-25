const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const postRouter = require("./router/router.js")
const app = express();
require("dotenv").config()

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use("/api", postRouter);

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
    console.log(process.env.URL);

}).catch(err=>{
    console.log(err);
})

app.listen(process.env.PORT || 3000, () => console.log("listening on port 3000"));
mongoose.set("useFindAndModify", false);