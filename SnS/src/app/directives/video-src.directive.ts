import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { TravelExpandService } from './../travel/travel-expand/travel-expand.service';
import { DBService } from '../travel/db.service';

@Directive({
  selector: '[appVideoSrc]'
})
export class VideoSrcDirective implements OnInit {
  constructor (
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private dbService: DBService,
    private travelExpandService: TravelExpandService
    ) {}

  ngOnInit() {
    this.renderer.setAttribute(this.elementRef.nativeElement, "src", this.dbService.getTravelCountry(this.travelExpandService.expandId-1).videoContent)
  }
}
