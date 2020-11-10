import { TravelExpandComponent } from './travel/travel-expand/travel-expand.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { TravelExpandModule } from './travel/travel-expand/travel-expand.module';
// import { VideoSrcDirective } from './directives/video-src.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TravelComponent,
    ContactComponent,
    AuthComponent,
    // VideoSrcDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    LayoutModule,
    TravelExpandModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
