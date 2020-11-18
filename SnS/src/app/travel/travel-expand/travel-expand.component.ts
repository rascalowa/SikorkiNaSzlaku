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
    private dbService: DBService,
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
    this.travelExpands = this.dbService.getTravelList();
  }

  ngOnDestroy(): void {
    //to avoid memory leaks
    this.travelExpandService.remove(this.id);
    console.log(this.element)
    //triggers no reaction?? - it removes app-travel-expand from DOM, routing travel adds it again
    this.element.remove();
    console.log("NG ON DESTROY RUNS")
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('expand-open');
    this.expandId = this.travelExpandService.expandId;

    // close modal on background click
    this.element.addEventListener('click', el => {
      if (el.target.className === 'expand') {
        this.close();
      }
      });
  }

  // X - 1
  // close modal (after background)
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('expand-open');
  }

    // X - 3
  closeModal() {
    this.travelExpandService.close('expand');
  }
}
