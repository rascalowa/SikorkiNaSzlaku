
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TravelExpandComponent } from './travel-expand.component';
import { VideoSrcDirective } from '../../directives/video-src.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [TravelExpandComponent, VideoSrcDirective],
  exports: [TravelExpandComponent]
})
export class TravelExpandModule {}
