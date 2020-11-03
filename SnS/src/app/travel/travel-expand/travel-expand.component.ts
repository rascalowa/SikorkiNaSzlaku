import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { TravelExpandService } from './travel-expand.service';
// import { TravelExpand } from './travel-expand.model';

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

  // travelExpands: TravelExpand[] = [
  //   new TravelExpand (
  //     1,
  //     'Travelexpand text',
  //     'https://vimeo.com/282455778',
  //     '../../../assets/Travel/Expand/Iguazu/Iguazu1.jpg',
  //     '../../../assets/Travel/Expand/Iguazu/Iguazu2.JPG',
  //     '../../../assets/Travel/Expand/Iguazu/Iguazu3.JPG'),
  //   new TravelExpand (
  //     2,
  //     'Travelexpand text',
  //     'https://vimeo.com/216470029',
  //     '../../../assets/Travel/Expand/Philippines/Philip1.jpg',
  //     '../../../assets/Travel/Expand/Philippines/Philip2.jpg',
  //     '../../../assets/Travel/Expand/Philippines/Philip3.jpg'
  //   ),
  //   new TravelExpand (
  //     3,
  //     'Travelexpand text',
  //     'https://vimeo.com/254882742',
  //     '../../../assets/Travel/Expand/Costa/Costa1.jpg',
  //     '../../../assets/Travel/Expand/Costa/Costa2.jpg',
  //     '../../../assets/Travel/Expand/Costa/Costa3.jpg'
  //   ),
  //   new TravelExpand (
  //     4,
  //     'Travelexpand text',
  //     'https://vimeo.com/265920237',
  //     '../../../assets/Travel/Expand/Peru/Peru1.JPG',
  //     '../../../assets/Travel/Expand/Peru/Peru2.JPG',
  //     '../../../assets/Travel/Expand/Peru/Peru3.jpg'
  //   ),
  //   new TravelExpand (
  //     5,
  //     'Travelexpand text',
  //     'https://vimeo.com/272071120',
  //     '../../../assets/Travel/Expand/Bolivia/Bolivia1.JPG',
  //     '../../../assets/Travel/Expand/Bolivia/Bolivia2.JPG',
  //     '../../../assets/Travel/Expand/Bolivia/Bolivia3.JPG'
  //   ),
  //   new TravelExpand (
  //     6,
  //     'Travelexpand text',
  //     'https://vimeo.com/260560758',
  //     '../../../assets/Travel/Expand/Columbia/Columbia1.JPG',
  //     '../../../assets/Travel/Expand/Columbia/Columbia2.JPG',
  //     '../../../assets/Travel/Expand/Columbia/Columbia3.JPG'
  //   ),
  //   new TravelExpand (
  //     7,
  //     'Travelexpand text',
  //     'https://vimeo.com/262304565',
  //     '../../../assets/Travel/Expand/Ecuador/Ecuador1.jpg',
  //     '../../../assets/Travel/Expand/Ecuador/Ecuador2.jpg',
  //     '../../../assets/Travel/Expand/Ecuador/Ecuador3.jpg'
  //   ),
  //   new TravelExpand (
  //     8,
  //     'Travelexpand text',
  //     'https://vimeo.com/228630285',
  //     '../../../assets/Travel/Expand/VietNam/Vietnam1.jpg',
  //     '../../../assets/Travel/Expand/VietNam/Vietnam2.jpg',
  //     '../../../assets/Travel/Expand/VietNam/Vietnam3.jpg'
  //   ),
  //   new TravelExpand (
  //     9,
  //     'Travelexpand text',
  //     'https://vimeo.com/240065386',
  //     '../../../assets/Travel/Expand/Greece/Greece1.jpg',
  //     '../../../assets/Travel/Expand/Greece/Greece2.JPG',
  //     '../../../assets/Travel/Expand/Greece/Greece3.JPG'
  //   ),
  //   new TravelExpand (
  //     10,
  //     'Travelexpand text',
  //     'https://vimeo.com/249211736',
  //     '../../../assets/Travel/Expand/Alpes/Alpes1.jpg',
  //     '../../../assets/Travel/Expand/Alpes/Alpes2.jpg',
  //     '../../../assets/Travel/Expand/Alpes/Alpes3.jpg'
  //   ),
  //   new TravelExpand (
  //     11,
  //     'Travelexpand text',
  //     'https://vimeo.com/256310533',
  //     '../../../assets/Travel/Expand/Nica/Nica1.jpg',
  //     '../../../assets/Travel/Expand/Nica/Nica2.jpg',
  //     '../../../assets/Travel/Expand/Nica/Nica3.jpg'
  //   )
  // ]

  constructor(
    private travelExpandService: TravelExpandService,
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
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('expand-open');
  }

}
