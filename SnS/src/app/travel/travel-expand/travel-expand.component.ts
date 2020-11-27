import { element } from 'protractor';
import { DBService } from './../db.service';
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
  // none shadow DOM - p37 -> required to target component tag itself
  encapsulation: ViewEncapsulation.None
})
export class TravelExpandComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Output() element: any;
  expandId: number;
  travelExpands: TravelExpand[];

  constructor(
    //public if I want to access it from template
    private travelExpandService: TravelExpandService,
    private travelListService: TravelListService,
    private el: ElementRef,
    ) {
     this.element = el.nativeElement;
    }

  ngOnInit(): void {
    // does id exist?
    if (!this.id) {
      console.error('Modal must have an id.');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.travelExpandService.add(this);

    // copy of the all countries list
    this.travelExpands = this.travelListService.getTravelList();
  }

  // open modal
  // O - 3
  open(): void {
    console.log("TEC open")
    this.element.style.display = 'block';
    document.body.classList.add('expand-open');//overflow hidden
    this.expandId = this.travelExpandService.expandId;
    console.log(this.expandId);


    // BG - 1
    // close modal on background click
    this.element.addEventListener('click', el => {

      if (this.expandId !== 0) {
        this.travelExpandService.close(el.target.className);
        console.log("TEC in onInit")
      }

      });
  }

  // X - 3
  // BG - 3
  // close modal (after background)
  close(): void {
    console.log("TEC close");
    this.element.style.display = 'none';
    document.body.classList.remove('expand-open');//overflow possible
    this.expandId = 0;
  }

  // CALLED ON BUTTON CLOSE
    // X - 1
  closeModal() {
    console.log("closeMODAL")
    this.travelExpandService.close('expand');
  }

  ngOnDestroy () {

  }
}
