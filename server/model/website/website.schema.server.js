const mongoose = require('mongoose');

const WebsiteSchema = mongoose.Schema({
    developerId : { type : mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    name : String,
    description : String,
    dateCreated : {type : Date, default : Date.now}
}, 
{ collection : "website" }
);

module.exports = WebsiteSchema;
