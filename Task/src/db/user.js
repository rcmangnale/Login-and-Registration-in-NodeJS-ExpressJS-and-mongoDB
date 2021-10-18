const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Registration",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
.once("open", ()=> console.log("connected"))
.on("error",error=> {
    console.log("Your Error",error);
});