import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/models/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  uid : string;
  wid : string;
  name : string;
  title : string;

  constructor(private pageService : PageService, private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.wid = params['wid'];
      this.uid = params['uid'];
    });
  }

  createPage() {
    const page : Page = {
      name : this.name,
      title : this.title,
      websiteId : this.wid
    };
    this.pageService.createPage(page);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
  }
}
