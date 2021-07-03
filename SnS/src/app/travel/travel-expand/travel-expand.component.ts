import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { TravelListService } from '../travel-list.service';
import { TravelExpand } from './travel-expand.model';
import { TravelExpandService } from './travel-expand.service';

@Component({
  selector: 'app-travel-expand',
  templateUrl: './travel-expand.component.html',
  styleUrls: ['./travel-expand.component.css', '../../app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TravelExpandComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() countryId: number;
  @Output() element: any;

  expandId: number;
  travelExpands: TravelExpand[];
  imageObject: Array<object> = [];
  header = document.getElementById('appHeader');


  constructor(
    private travelExpandService: TravelExpandService,
    private travelListService: TravelListService,
    private el: ElementRef
    ) {
      this.element = el.nativeElement;
    }

  ngOnInit(): void {
    console.log("CHILD " + this.countryId);
    // // does id exist?
    // if (!this.id) {
    //   console.error('Modal must have an id.');
    //   return;
    // }
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.travelExpandService.add(this);
    // copy of the all countries list
    this.travelExpands = this.travelListService.getTravelList();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('expand-open');//overflow hidden
    this.expandId = this.travelExpandService.expandId;
    // close modal on background click
    this.element.addEventListener('click', el => {
      if (this.expandId !== 0) {
        this.travelExpandService.close(el.target.className);
      }
    });
  }

  //for future - here should be just one closing modal function
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('expand-open');
    this.expandId = 0;
  }

  closeModal() {
    this.travelExpandService.close('expand');
  }

  ngOnDestroy () {
    this.travelExpandService.clear();
  }
}
