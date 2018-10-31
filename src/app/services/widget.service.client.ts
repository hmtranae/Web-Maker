import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {
    constructor() {}

    widgets = [
        {
        _id: "123", 
        widgetType: "HEADING", 
        pageId: "321", 
        size: 2, 
        text: "GIZMODO"
        },
        {
        _id: "234", 
        widgetType: "HEADING", 
        pageId: "321", 
        size: 4, 
        text: "Lorem ipsum"
        },
        {
        _id: "345", 
        widgetType: "IMAGE", 
        pageId: "321", 
        width: "100%", 
        url: "http://lorempixel.com/400/200/"
        },
        {
        _id: "567", 
         widgetType: "HEADING", 
         pageId: "321", 
         size: 4, 
         text: "Lorem ipsum"
        },
        {
        _id: "678", 
        widgetType: "YOUTUBE", 
        pageId: "321", 
        width: "100%", 
        url: "https://youtu.be/AM2Ivdi9c4E" 
        },
    ];

    createWidget(widget) {
        widget._id = Math.random().toString();
        this.widgets.push(widget);
        return widget;
    }

    findWidgetsByPageId(pageId) {
        let result = [];
        for (let i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i].pageId === pageId) {
                result.push(this.widgets[i]); 
            }
        }
        return result;
    }

    findWidgetById(widgetId) {
        for (let i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                return this.widgets[i];
            }
        }
    }

    updateWidget(widget) {
        const oldWidget = this.findWidgetById(widget._id);
        const index = this.widgets.indexOf(oldWidget);
        this.widgets[index] = widget;
    }

    deleteWidget(widgetId) {
        const widget = this.findWidgetById(widgetId);
        const index = this.widgets.indexOf(widget);
        this.widgets.splice(index, 1);
    }

}