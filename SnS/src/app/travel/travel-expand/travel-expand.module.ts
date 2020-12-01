
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TravelExpandComponent } from './travel-expand.component';
import { VideoSrcDirective } from '../../directives/video-src.directive';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  imports: [CommonModule, NgImageSliderModule],
  declarations: [TravelExpandComponent, VideoSrcDirective],
  exports: [TravelExpandComponent]
})
export class TravelExpandModule {}
