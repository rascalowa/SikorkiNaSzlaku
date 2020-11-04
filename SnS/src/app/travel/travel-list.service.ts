import { TravelExpand } from './travel-expand/travel-expand.model';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TravelListService {

  private travelExpands: TravelExpand[] = [
    new TravelExpand (
      1,
      'Travelexpand text',
      'https://vimeo.com/282455778',
      '../../../assets/Travel/Expand/Iguazu/Iguazu1.jpg',
      '../../../assets/Travel/Expand/Iguazu/Iguazu2.JPG',
      '../../../assets/Travel/Expand/Iguazu/Iguazu3.JPG'),
    new TravelExpand (
      2,
      'Travelexpand text',
      'https://vimeo.com/216470029',
      '../../../assets/Travel/Expand/Philippines/Philip1.jpg',
      '../../../assets/Travel/Expand/Philippines/Philip2.jpg',
      '../../../assets/Travel/Expand/Philippines/Philip3.jpg'
    ),
    new TravelExpand (
      3,
      'Travelexpand text',
      'https://vimeo.com/254882742',
      '../../../assets/Travel/Expand/Costa/Costa1.jpg',
      '../../../assets/Travel/Expand/Costa/Costa2.jpg',
      '../../../assets/Travel/Expand/Costa/Costa3.jpg'
    ),
    new TravelExpand (
      4,
      'Travelexpand text',
      'https://vimeo.com/265920237',
      '../../../assets/Travel/Expand/Peru/Peru1.JPG',
      '../../../assets/Travel/Expand/Peru/Peru2.JPG',
      '../../../assets/Travel/Expand/Peru/Peru3.jpg'
    ),
    new TravelExpand (
      5,
      'Travelexpand text',
      'https://vimeo.com/272071120',
      '../../../assets/Travel/Expand/Bolivia/Bolivia1.JPG',
      '../../../assets/Travel/Expand/Bolivia/Bolivia2.JPG',
      '../../../assets/Travel/Expand/Bolivia/Bolivia3.JPG'
    ),
    new TravelExpand (
      6,
      'Travelexpand text',
      'https://vimeo.com/260560758',
      '../../../assets/Travel/Expand/Columbia/Columbia1.JPG',
      '../../../assets/Travel/Expand/Columbia/Columbia2.JPG',
      '../../../assets/Travel/Expand/Columbia/Columbia3.JPG'
    ),
    new TravelExpand (
      7,
      'Travelexpand text',
      'https://vimeo.com/262304565',
      '../../../assets/Travel/Expand/Ecuador/Ecuador1.jpg',
      '../../../assets/Travel/Expand/Ecuador/Ecuador2.jpg',
      '../../../assets/Travel/Expand/Ecuador/Ecuador3.jpg'
    ),
    new TravelExpand (
      8,
      'Travelexpand text',
      'https://vimeo.com/228630285',
      '../../../assets/Travel/Expand/VietNam/Vietnam1.jpg',
      '../../../assets/Travel/Expand/VietNam/Vietnam2.jpg',
      '../../../assets/Travel/Expand/VietNam/Vietnam3.jpg'
    ),
    new TravelExpand (
      9,
      'Travelexpand text',
      'https://vimeo.com/240065386',
      '../../../assets/Travel/Expand/Greece/Greece1.jpg',
      '../../../assets/Travel/Expand/Greece/Greece2.JPG',
      '../../../assets/Travel/Expand/Greece/Greece3.JPG'
    ),
    new TravelExpand (
      10,
      'Travelexpand text',
      'https://vimeo.com/249211736',
      '../../../assets/Travel/Expand/Alpes/Alpes1.jpg',
      '../../../assets/Travel/Expand/Alpes/Alpes2.jpg',
      '../../../assets/Travel/Expand/Alpes/Alpes3.jpg'
    ),
    new TravelExpand (
      11,
      'Travelexpand text',
      'https://vimeo.com/256310533',
      '../../../assets/Travel/Expand/Nica/Nica1.jpg',
      '../../../assets/Travel/Expand/Nica/Nica2.jpg',
      '../../../assets/Travel/Expand/Nica/Nica3.jpg'
    )
  ]

  // to return direct reference to this array - exact copy in case of changing we still have original one, so we really can access it from outside
  getTravelList() {
    return this.travelExpands.slice();
  }
}
