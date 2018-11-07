import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client';

@Injectable()
export class WidgetService {
    constructor() {}

    widgets : Widget[] = [
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
        width: "50%", 
        url: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBKHUZJ.img?h=416&w=624&m=6&q=60&u=t&o=f&l=f&x=1733&y=1447"
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
        width: "60%", 
        url: "https://youtu.be/AM2Ivdi9c4E" 
        },
    ];

    createWidget(widget : Widget) {
        widget._id = Math.random().toString();
        this.widgets.push(widget);
        return widget;
    }

    findWidgetsByPageId(pageId : string) {
        let result = [];
        for (let i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i].pageId === pageId) {
                result.push(this.widgets[i]); 
            }
        }
        return result;
    }

    findWidgetById(widgetId : string) {
        for (let i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                return this.widgets[i];
            }
        }
    }

    updateWidget(widget : Widget) {
        const oldWidget = this.findWidgetById(widget._id);
        const index = this.widgets.indexOf(oldWidget);
        this.widgets[index] = widget;
    }

    deleteWidget(widgetId : string) {
        const widget = this.findWidgetById(widgetId);
        const index = this.widgets.indexOf(widget);
        this.widgets.splice(index, 1);
    }

}