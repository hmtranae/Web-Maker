import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from "./app.routing";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetHeadingComponent } from './components/widget/widget-edit/widget-heading/widget-heading.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { UserService } from "./services/user.service.client";
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';
import { SharedService } from './services/shared.service.client';
import { AuthGuard } from './services/auth-guard.service';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AdminGuard } from './services/admin-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeadingComponent,
    WidgetYoutubeComponent,
    WidgetImageComponent,
    UserListComponent
  ],
  imports: [BrowserModule, Routing, FormsModule, HttpModule],
  providers: [UserService, WebsiteService, PageService, WidgetService, SharedService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
