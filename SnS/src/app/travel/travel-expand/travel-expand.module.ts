import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TravelExpandComponent } from './travel-expand.component';
import { VideoSrcDirective } from '../../directives/video-src.directive';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [TravelExpandComponent, VideoSrcDirective],
  exports: [TravelExpandComponent],
  bootstrap: [TravelExpandComponent],
})
export class TravelExpandModule {}
