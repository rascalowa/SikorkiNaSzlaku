import { Component, Input, OnInit } from '@angular/core';
import { TravelExpand } from '../travel-expand.model';

@Component({
  selector: 'app-travel-expand-chosen',
  templateUrl: './travel-expand-chosen.component.html',
  styleUrls: ['./travel-expand-chosen.component.css']
})
export class TravelExpandChosenComponent implements OnInit {
  //property without initialisation - it will be taken from outside
  @Input() travelExpand: TravelExpand;

  constructor() { }

  ngOnInit(): void {
  }

}
