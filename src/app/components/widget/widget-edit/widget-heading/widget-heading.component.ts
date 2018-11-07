import { Component, OnInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service.client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-heading.component.html',
  styleUrls: ['./widget-heading.component.css']
})
export class WidgetHeadingComponent implements OnInit {

  wgid : string;
  pid : string;
  uid : string;
  wid : string;
  widget : any;

  constructor(private widgetService : WidgetService, private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.wgid = params['wgid'];
      this.pid = params['pid'];
      this.uid = params['uid'];
      this.wid = params['wid'];
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
