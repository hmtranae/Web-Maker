import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from 'src/app/services/widget.service.client';
import { Widget } from 'src/app/models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  
  uid : string;
  pid : string;
  wid : string;
  wgid : string;
  widget : Widget;

  constructor(private activatedRoute : ActivatedRoute, private router : Router, private widgetService : WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.pid = params['pid'];
      this.wid = params['wid'];
      this.wgid = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.wgid);
    });
  }

  update() {
    this.widgetService.updateWidget(this.widget);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }


}
