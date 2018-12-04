const mongoose = require('mongoose');

const WidgetSchema = mongoose.Schema({
    pageId : 
    widgetType : 
    name : 
    text : 
    url : 
    width : 
    size : { type : Number}
    dateCreated : { type : Date, default : Date.now }
}, 
{ collection : "widget" }
);

module.exports = WidgetSchema;