const mongoose = require('mongoose');

const PageSchema = mongoose.Schema({
    websiteId : "",
    name : { type : String, default : "" },
    description : { type : String, default : "" },
    dateCreated : { type : Date, default : Date.now }
}, 
{ collection : "page" }
);

module.exports = PageSchema;