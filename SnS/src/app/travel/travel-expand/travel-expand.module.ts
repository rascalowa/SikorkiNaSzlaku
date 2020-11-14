
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
// import { ClickOutsideModule } from 'ng-click-outside';
import { TravelExpandComponent } from './travel-expand.component';
import { ClickOutsideDirective } from 'src/app/directives/outside.directive';
import { VideoSrcDirective } from '../../directives/video-src.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [TravelExpandComponent, VideoSrcDirective, ClickOutsideDirective],
  exports: [TravelExpandComponent]
})
export class TravelExpandModule {}
