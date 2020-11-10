import { TravelExpandService } from './../travel/travel-expand/travel-expand.service';
import { TravelListService } from './../travel/travel-list.service';
// import { TravelComponent } from './../travel/travel.component';
// import { TravelExpandComponent } from '../travel/travel-expand/travel-expand.component';

import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVideoSrc]'
})
export class VideoSrcDirective implements OnInit {
  constructor (
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private travelListService: TravelListService,
    // private travelExpandComponent: TravelExpandComponent,
    private travelExpandService: TravelExpandService
    ) {}
    // this.travelExpandComponent.selectedCountry.videoContent
    // "https://player.vimeo.com/video/282455778"
  ngOnInit() {
    this.renderer.setAttribute(this.elementRef.nativeElement, "src", this.travelListService.getTravelCountry(this.travelExpandService.expandId-1).videoContent)
  }
}
