import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective implements AfterViewInit {

  @Output() clickOutside = new EventEmitter<void>();
 expandBody;

  constructor(private elementRef: ElementRef) {
    this.expandBody = this.elementRef.nativeElement
    console.log(this.expandBody) //correct -> div.expand-body
   }
  // HHHHHH

ngAfterViewInit(){

}

  @HostListener('document: click', ['$event.target'])
  public onClick(target) {
    console.log(target) // button read more
    const clickedInside = target.contains(this.expandBody);
    console.log(clickedInside) //false
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }

  // ADD HOSTLISTENER IN OLD WAY!!!!!!!!!
}
