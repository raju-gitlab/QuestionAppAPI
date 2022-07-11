const _config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const appRouter = require('./Routes/App_routes');
const fileupload = require('express-fileupload');

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api",appRouter);
app.use(fileupload({useTempFiles: true}));

if(!_config.get("jwtPrivateKey")) {
    console.error("FATAL ERROR : json web token is not set");
    process.exit(1);
}


mongoose.connect("mongodb://localhost:27017/QuestionDB")
    .then(() => console.log("Database Connected.."))
    .catch(() => console.log("Connection not initiated"));
const port = process.env.PORT || 9000;
app.listen(port , () => {
    console.log(`Server Listen on port : ${port}`)
});