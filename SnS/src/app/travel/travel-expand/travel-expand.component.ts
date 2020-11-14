// import { ClickOutsideDirective } from 'src/app/directives/outside.directive';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { TravelListService } from '../travel-list.service';
import { TravelExpand } from './travel-expand.model';
import { TravelExpandService } from './travel-expand.service';

@Component({
  selector: 'app-travel-expand',
  templateUrl: './travel-expand.component.html',
  styleUrls: ['./travel-expand.component.css', '../../app.component.css'],
  // none shadow DOM - p37
  // required to target component tag itself
  encapsulation: ViewEncapsulation.None
})
export class TravelExpandComponent implements OnInit, OnDestroy {
  @Input() id: string;
  //element is oitside of the scope of this component
  @Output() element: any;
  expandedBody;
  private chosenElement: any;
  expandId: number;
  @Output() selectedCountry: TravelExpand;
  travelExpands: TravelExpand[];
  // @ViewChild('outside', {static: true}) outside: ElementRef;
  @ViewChild('expandBackground', {static: true}) expandBackground: ElementRef;
  clickedOutsideCount = 0;


  constructor(
    //public if I want to access it from template
    private travelExpandService: TravelExpandService,
    private travelListService: TravelListService,
    // public outsideDirective: OutsideDirective,
    private el: ElementRef,
    private renderer: Renderer2
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
    this.travelExpands = this.travelListService.getTravelList()
  }

  ngAfterViewInit(){
    // @ViewChild('outside', {static: true}) outside: ElementRef;
    // this.renderer.listen(this.outside )
  }

  ngOnDestroy(): void {
    //to avoid memory leaks
    this.travelExpandService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('expand-open');
    this.expandId = this.travelExpandService.expandId;
    this.expandedBody = document.getElementById('outside')
    console.log(this.expandedBody)

    // this.selectedCountry = this.travelExpands[this.expandId-1];
    // this.renderer.listen(this.expandBackground.nativeElement, 'click', (e:Event)=>{
    //   // if(e.target === this.elementBody){
    //   //   console.log(e.target)
    //   // } else {
    //   //   console.log('Not this time')
    //   // }
    //   console.log(e.target)
    // })


    // console.log(document.getElementById('outside'))
    // let chosenOne = this.element.children[this.expandId-1]; //div.expand
    // console.log(chosenOne);



  // // close modal on background click
  // this.element.addEventListener('click', el => {
  //   if (el.target.className === 'expand') {
  //     this.close();
  //   }
  //   });
  }

  // onClickedOutside(e) {
  //   console.log("CLICKED OUTSIDE");
  // }

  // incrementClickOutsideCount() {
  //   this.clickedOutsideCount += 1;
  // }


  // close modal in theory after background
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('expand-open');
    console.log('FROM TRAVEL EXPAND CMP - CLOSE')
  }

  closeModal() {
    this.travelExpandService.close('expand');
    console.log('FROM TRAVEL EXPAND CMP - CLOSE MODAL')
  }
}
