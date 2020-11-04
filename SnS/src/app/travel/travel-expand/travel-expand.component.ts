import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
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
// undefined initially
  @Input() travelExpand: TravelExpand;
  expandId: number;


  constructor(
    private travelExpandService: TravelExpandService,
    private travelList: TravelListService,
    private el: ElementRef
    ) {this.element = el.nativeElement}

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
  }

  ngOnDestroy(): void {
    this.travelExpandService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('expand-open');
    this.expandId = this.travelExpandService.expandId;
    // STILL 1 HERE
    console.log('from travelExpand.id: ' + this.travelExpand.id)
    console.log('from travel-expand: ' + this.expandId)
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


// constructor(
//   private travelExpandService: TravelExpandService,
//   private el: ElementRef
//   ) {this.element = el.nativeElement}

// ngOnInit(): void {
//   // does id exist?
//   if (!this.id) {
//     console.error('Modal must have an id.');
//     return;
//   }

//   // move element to bottom of page (just before </body>) so it can be displayed above everything else
//   document.body.appendChild(this.element);

//   // close modal on background click
//   this.element.addEventListener('click', el => {
//     if (el.target.className === 'expand') {
//         this.close();
//     }
//   });

//   // add self (this modal instance) to the modal service so it's accessible from controllers
//   this.travelExpandService.add(this);
// }

// ngOnDestroy(): void {
//   this.travelExpandService.remove(this.id);
//   this.element.remove();
// }

// // open modal
// open(): void {
//   this.element.style.display = 'block';
//   document.body.classList.add('expand-open');
// }

// // close modal
// close(): void {
//   this.element.style.display = 'none';
//   document.body.classList.remove('expand-open');
// }

// closeModal(id: string) {
//   this.travelExpandService.close(id);
// }

// }
