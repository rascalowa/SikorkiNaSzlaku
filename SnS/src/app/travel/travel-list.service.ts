import { TravelExpand } from './travel-expand/travel-expand.model';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TravelListService {
private travelExpands: TravelExpand[] = [];

  // private travelExpands: TravelExpand[] = [
  //   new TravelExpand (
  //     1,
  //     "On the border between Agrentina and Brazil you can find Iguazu. Most amazing place we have seen so far, Monika's childhood dream. It is a set of 275 minor waterfalls, on the highest point water is coming down from 82 meters. Whole Iguazu waterfall is 2 kilometers wide! Just imagine big mass of water (1700m³) falling down every second... This view is worth every penny!",
  //     'https://player.vimeo.com/video/282455778',
  //     '../../../assets/Travel/Expand/Iguazu/Iguazu1.jpg',
  //     '../../../assets/Travel/Expand/Iguazu/Iguazu2.JPG',
  //     '../../../assets/Travel/Expand/Iguazu/Iguazu3.JPG'),
  //   new TravelExpand (
  //     2,
  //     "Boracay's Whitebeach with it's white sand and clear crystal water is annually in the top ten of the most beautiful beaches in the world. Worth to visit especially before/after highseason. Siargao island offers great waves for surfing and wonderful landscapes both on the coast and inland. Parties with live music, wonderful atmosphere are just an addition. And an amazing underwater world! Filipinos are very friendly and always willing to help. The Philippines is best destination for longer holidays.",
  //     'https://player.vimeo.com/video/216470029',
  //     '../../../assets/Travel/Expand/Philippines/Philip1.jpg',
  //     '../../../assets/Travel/Expand/Philippines/Philip2.jpg',
  //     '../../../assets/Travel/Expand/Philippines/Philip3.jpg'
  //   ),
  //   new TravelExpand (
  //     3,
  //     "Monkeys jumping above your head, huge sea turtles in the water and hunting pelicans are just small part of costarican wildlife. Rainforest gives home for many species. Deeper in the jungle you can find even more, but it is not always good idea to look for more.",
  //     'https://player.vimeo.com/video/254882742',
  //     '../../../assets/Travel/Expand/Costa/Costa1.jpg',
  //     '../../../assets/Travel/Expand/Costa/Costa2.jpg',
  //     '../../../assets/Travel/Expand/Costa/Costa3.jpg'
  //   ),
  //   new TravelExpand (
  //     4,
  //     "Canyon Colca is one of the deepest canyons in the world (3270m - twice as deep as Grand Canyon in the USA). Huge space between steep sides is a great place for biggest flying birds in the world. Condors weight up to 15 kg and their wingspan could be even 320cm! Just imagine these enormous animals flying few meters above your head! Huarascan National Park in Cordiliera Blanca offers amazing views! Huarascan, the highest peruvian mountain (6768m) with huge, beautiful valley underneath. It comes out of the clouds just for few seconds before they come to cover it's summit again. Famous Machu Picchu? Views were amazing, but... Huge queue in front of the gates at 4 o'clock in the morning, amount of people walking on the old buildings, trained llamas forced to stay laying for the photos... Not our thing.",
  //     'https://player.vimeo.com/video/265920237',
  //     '../../../assets/Travel/Expand/Peru/Peru1.JPG',
  //     '../../../assets/Travel/Expand/Peru/Peru2.JPG',
  //     '../../../assets/Travel/Expand/Peru/Peru3.jpg'
  //   ),
  //   new TravelExpand (
  //     5,
  //     "Salar de Uyuni in Bolivia is the world's largest salt flat (over 10,000 square kilometers). During dry season we can see hexagonal salt formations on the surface. After the rain Uyuni transforms into a world's biggest mirror. Unforgettable view...",
  //     'https://player.vimeo.com/video/272071120',
  //     '../../../assets/Travel/Expand/Bolivia/Bolivia1.JPG',
  //     '../../../assets/Travel/Expand/Bolivia/Bolivia2.JPG',
  //     '../../../assets/Travel/Expand/Bolivia/Bolivia3.JPG'
  //   ),
  //   new TravelExpand (
  //     6,
  //     "For food lovers:) Rice or red beans? Beef, sausage or bacon? Egg or avocado? Bandeja Paisa offers everything at once! It is one of the most popular traditional colombian dish. Ingredients may vary between cities and restaurants, but it is always huge portion of food! But Colombians have much more: street orange juice, empanadas, corn soup, avocados in size of melon... Columbia is worth to visit not only for food. City of Medellin with great vibes, Valle de Cocora with the world's tallest palm trees or colorful Guatape city should be also on your list!",
  //     'https://player.vimeo.com/video/260560758',
  //     '../../../assets/Travel/Expand/Columbia/Columbia1.JPG',
  //     '../../../assets/Travel/Expand/Columbia/Columbia2.JPG',
  //     '../../../assets/Travel/Expand/Columbia/Columbia3.JPG'
  //   ),
  //   new TravelExpand (
  //     7,
  //     "Driving through Ecuador was like attending a medieval fashion show: each village has own traditional outfit. Most of these outfits gave off an intense smell of herbs or stable animals, which we did not like so much especially on winding mountain roads... But the Ecuadorian views made up for everything! Did you know the point on the earth that's closest to the Moon? No, it's not Mount Everest. It is the mount Chimborazo in Ecuador! It is not the highest mountain, but it is so close to the equaitor that it's summit is the farthest point from the Earth's center. ",
  //     'https://player.vimeo.com/video/262304565',
  //     '../../../assets/Travel/Expand/Ecuador/Ecuador1.jpg',
  //     '../../../assets/Travel/Expand/Ecuador/Ecuador2.jpg',
  //     '../../../assets/Travel/Expand/Ecuador/Ecuador3.jpg'
  //   ),
  //   new TravelExpand (
  //     8,
  //     "Discovering it on a motorbike was very interesting experience, not necessarily safe one. Whole Wietnam is a beautiful country. The wonderful limestone formations in Ha Long Bay, Tam Coc province with it's intensive green rice terraces, red ruins of old temples in Hoi An... But not everything in Vietnam was so colorful. Almost 50 years have passed since the end of the war, but its effects are still clearly visible. The attitude of the Vietnamese towards tourists may explain their recent history. Labirynths of tiny tunnels show how the Vietnamese lived in these days. Brutal traps, terrible weapons and it's horrible effect everybody can see in War Remnants Museum in Ho Chi Minh.",
  //     'https://player.vimeo.com/video/228630285',
  //     '../../../assets/Travel/Expand/VietNam/Vietnam1.jpg',
  //     '../../../assets/Travel/Expand/VietNam/Vietnam2.jpg',
  //     '../../../assets/Travel/Expand/VietNam/Vietnam3.jpg'
  //   ),
  //   new TravelExpand (
  //     9,
  //     'Travelexpand Greece text',
  //     'https://player.vimeo.com/video/240065386',
  //     '../../../assets/Travel/Expand/Greece/Greece1.jpg',
  //     '../../../assets/Travel/Expand/Greece/Greece2.JPG',
  //     '../../../assets/Travel/Expand/Greece/Greece3.JPG'
  //   ),
  //   new TravelExpand (
  //     10,
  //     'Travelexpand Alpes text',
  //     'https://player.vimeo.com/video/249211736',
  //     '../../../assets/Travel/Expand/Alpes/Alpes1.jpg',
  //     '../../../assets/Travel/Expand/Alpes/Alpes2.jpg',
  //     '../../../assets/Travel/Expand/Alpes/Alpes3.jpg'
  //   ),
  //   new TravelExpand (
  //     11,
  //     'Travelexpand Nicaragua text',
  //     'https://player.vimeo.com/video/256310533',
  //     '../../../assets/Travel/Expand/Nica/Nica1.jpg',
  //     '../../../assets/Travel/Expand/Nica/Nica2.jpg',
  //     '../../../assets/Travel/Expand/Nica/Nica3.jpg'
  //   )
  // ]

  setTravelList(travelExpands: TravelExpand[]) {
    this.travelExpands = travelExpands;
  }

  // to return direct reference to this array - exact copy in case of changing we still have original one, so we really can access it from outside
  getTravelList() {
    return this.travelExpands.slice();
  }

  getTravelCountry(index: number){
    return this.travelExpands[index];
  }
}
