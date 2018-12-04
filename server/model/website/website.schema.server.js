const mongoose = require('mongoose');

const WebsiteSchema = mongoose.Schema({
    developerId : "",
    name : { type : String , default : "" },
    description : { type : String , default : "" },
    dateCreated : {type : Date, default : Date.now}
}, 
{ collection : "website" }
);

module.exports = WebsiteSchema;