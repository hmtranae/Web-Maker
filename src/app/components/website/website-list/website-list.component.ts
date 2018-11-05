import { Component, OnInit } from '@angular/core';
import { WebsiteService } from 'src/app/services/website.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  websites : any[]; // array that stores all of our websites
  uid : string;


  // constructor will run BEFORE the page is loaded
  constructor(private websiteService : WebsiteService, private activatedRoute : ActivatedRoute) {}
  // Router will route user from one page to the next
  // ActivatedRoute will let you access data in the URL

  // ngOnInit function will run after the page has finished loading
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.uid = params['uid'];
        this.websites = this.websiteService.findWebsitesByUser(this.uid);
      }
    )
  }

}
