import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { WidgetService } from 'src/app/services/widget.service.client'
import { Widget } from 'src/app/models/widget.model.client'

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  uid: string
  pid: string
  wid: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private widgetService: WidgetService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid']
      this.pid = params['pid']
      this.wid = params['wid']
    })
  }

  create(type: string) {
    const widget: Widget = {
      widgetType: type,
      pageId: this.pid
    }

    this.widgetService.createWidget(widget).subscribe((widget: Widget) => {
      const wgid: string = widget._id
      this.router.navigate([
        'user',
        this.uid,
        'website',
        this.wid,
        'page',
        this.pid,
        'widget',
        wgid
      ])
    })
  }
}
