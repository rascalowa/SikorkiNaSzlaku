import { Component, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TravelListService } from '../travel-list.service';
import { TravelExpand } from './travel-expand.model';
import { TravelExpandService } from './travel-expand.service';

@Component({
  selector: 'app-travel-expand',
  templateUrl: './travel-expand.component.html',
  styleUrls: ['./travel-expand.component.css', '../../app.component.css'],
  // none shadow DOM - p37
  encapsulation: ViewEncapsulation.None
})
export class TravelExpandComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;
  // @Input() travelExpandUHU: TravelExpand;
  expandId: number;
  // @Input() indexUHU: number;
  @Output() selectedCountry: TravelExpand;
  // expandedCountry: TravelExpand[] = [];
  // DEFINED ARRAY WITH COUNTRIES LIST
  travelExpands: TravelExpand[];
  // @ViewChild('iframe') iframe: ElementRef

  constructor(
    private travelExpandService: TravelExpandService,
    private travelListService: TravelListService,
    private el: ElementRef,
    // private sanitizer: DomSanitizer
    ) {
      this.element = el.nativeElement
      // this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.yahoo.com");
    }

  ngOnInit(): void {
    // does id exist?
    if (!this.id) {
      console.error('Modal must have an id.');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', el => {
      if (el.target.className === 'expand') {
          this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.travelExpandService.add(this);

    //COPY OF THE LIST OF ALL COUNTRIES
    this.travelExpands = this.travelListService.getTravelList()
  }

  // ngAfterViewInit(){
  //   this.selectedCountry= this.travelExpands[this.expandId];
  //   console.log(this.expandId);
  //   // this.iframe.nativeElement.setAttribute('src', chosenCountry);
  // }

  ngOnDestroy(): void {
    this.travelExpandService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('expand-open');
    this.expandId = this.travelExpandService.expandId;
    //WORKD FINE BUT FOR WHAT??
    this.selectedCountry = this.travelExpands[this.expandId-1];
    // this.expandedCountry.push(this.travelExpandUHU);
    console.log(this.expandId); // WORKS FINE

    // console.log(this.travelListService.expandCountryId);
        ///////////////////////////////////

  }


  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('expand-open');
  }

  closeModal() {
    this.travelExpandService.close('expand');
  }
}
