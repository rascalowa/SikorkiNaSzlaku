import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { TravelExpandService } from './../travel/travel-expand/travel-expand.service';
import { TravelListService } from './../travel/travel-list.service';

@Directive({
  selector: '[appVideoSrc]'
})
export class VideoSrcDirective implements OnInit {
  constructor (
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private travelListService: TravelListService,
    private travelExpandService: TravelExpandService
    ) {}

  ngOnInit() {
    this.renderer.setAttribute(this.elementRef.nativeElement, "src", this.travelListService.getTravelCountry(this.travelExpandService.expandId-1).videoContent)
  }
}
