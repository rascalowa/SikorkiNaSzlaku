import { TravelExpand } from './travel-expand/travel-expand.model';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TravelListService {
// private travelExpands: TravelExpand[] = [];

//IN CASE SOME CHANGES ARE NEEDED - paste TravelExpandList
 private travelExpands: TravelExpand[] = [
    new TravelExpand (
      1,
      "On the border between Agrentina and Brazil you can find Iguazu. Most amazing place we have seen so far, Monika's childhood dream. It is a set of 275 minor waterfalls, on the highest point water comes down from 82 meters. Whole Iguazu waterfall is 2 kilometers wide! Just imagine this big mass of water (1700m³) falling down every second... That view is worth every penny!",
      'https://player.vimeo.com/video/282455778',
      '../../../assets/Travel/Expand/Iguazu/Iguazu1.jpg',
      '../../assets/Travel/Expand/Iguazu/Iguazu1min.jpg',
      '../../../assets/Travel/Expand/Iguazu/Iguazu2.JPG',
      '../../assets/Travel/Expand/Iguazu/Iguazu2min.jpg',
      '../../../assets/Travel/Expand/Iguazu/Iguazu3.JPG',
      '../../assets/Travel/Expand/Iguazu/Iguazu3min.jpg'
      ),
    new TravelExpand (
      2,
      "Boracay's Whitebeach with it's white sand and clear crystal water is annually in the top ten of the most beautiful beaches in the world. Worth to visit especially before/after highseason. Siargao island offers great waves for surfing and wonderful landscapes both on the coast and inland. Wonderful surf atmosphere, people with passion and parties with live music are just an addition. Filipinos are very friendly and always willing to help. The Philippines is best destination for longer holidays, espesially for water lovers: there is an amazing underwater world!",
      'https://player.vimeo.com/video/216470029',
      '../../../assets/Travel/Expand/Philippines/Philip1.jpg',
      '../../../assets/Travel/Expand/Philippines/Philip1min.jpg',
      '../../../assets/Travel/Expand/Philippines/Philip2.jpg',
      '../../../assets/Travel/Expand/Philippines/Philip2min.jpg',
      '../../../assets/Travel/Expand/Philippines/Philip3.jpg',
      '../../../assets/Travel/Expand/Philippines/Philip3min.jpg'
    ),
    new TravelExpand (
      3,
      "Monkeys are jumping above your head, huge see turtles swimming with you when you kitesurfing. As soon as the wind dies a hunting flock of pelicans takes your spot. And this is just a small part of costarican wildlife. Stunning rainforest gives home for many species. Deeper in the jungle you can find even more, but it is not always good idea to look for more...",
      'https://player.vimeo.com/video/254882742',
      '../../../assets/Travel/Expand/Costa/Costa1.jpg',
      '../../../assets/Travel/Expand/Costa/Costa1min.jpg',
      '../../../assets/Travel/Expand/Costa/Costa2.jpg',
      '../../../assets/Travel/Expand/Costa/Costa2min.jpg',
      '../../../assets/Travel/Expand/Costa/Costa3.jpg',
      '../../../assets/Travel/Expand/Costa/Costa3min.jpg'
    ),
    new TravelExpand (
      4,
      "Canyon Colca is one of the deepest canyons in the world (3270m - twice as deep as Grand Canyon in the USA). Huge space between steep sides is a great place for biggest flying birds in the world. Condors weight up to 15 kg and their wingspan could be even 320cm! Just imagine these enormous animals flying few meters above your head! Huarascan National Park in Cordiliera Blanca also offers amazing views. Huarascan, the highest peruvian mountain (6768m) with huge, beautiful valley underneath. It comes out of the clouds just for few seconds before it's summit get cover again. Famous Machu Picchu? Views were amazing, but... Huge queue in front of the gates at 4 o'clock in the morning, amount of people walking on the old buildings, trained llamas forced to stay laying for the photos... Not really our thing.",
      'https://player.vimeo.com/video/265920237',
      '../../../assets/Travel/Expand/Peru/Peru1.JPG',
      '../../../assets/Travel/Expand/Peru/Peru1min.jpg',
      '../../../assets/Travel/Expand/Peru/Peru2.JPG',
      '../../../assets/Travel/Expand/Peru/Peru2min.jpg',
      '../../../assets/Travel/Expand/Peru/Peru3.jpg',
      '../../../assets/Travel/Expand/Peru/Peru3min.jpg'
    ),
    new TravelExpand (
      5,
      "Bolivia is country of amazing views. When staying in La Paz (capital of Bolivia) we went on a day trip to the Valle de las Animas. We climbed up the flowery meadow, watch the city from above and went down among needle-like rock formations without meeting anyone along the way. But the best bolivian trip was 3 days later! Salar de Uyuni is the world's largest salt flat (over 10,000 square kilometers). During dry season we can see hexagonal salt formations on the surface. After rain Uyuni transforms into the world's biggest mirror. Unforgettable view...",
      'https://player.vimeo.com/video/272071120',
      '../../../assets/Travel/Expand/Bolivia/Bolivia1.JPG',
      '../../../assets/Travel/Expand/Bolivia/Bolivia1min.jpg',
      '../../../assets/Travel/Expand/Bolivia/Bolivia2.JPG',
      '../../../assets/Travel/Expand/Bolivia/Bolivia2min.jpg',
      '../../../assets/Travel/Expand/Bolivia/Bolivia3.JPG',
      '../../../assets/Travel/Expand/Bolivia/Bolivia3.jpg'
    ),
    new TravelExpand (
      6,
      "For food lovers:) Rice or red beans? Beef, sausage or bacon? Egg or avocado? Bandeja Paisa offers everything at once! It is one of the most popular traditional colombian dish. Ingredients may vary between cities and restaurants, but it is always huge portion of food! But Colombians have much more: street orange juice, empanadas, corn soup, avocados in size of melon... Columbia is worth to visit not only for food. City of Medellin with it's great vibes, Valle de Cocora with the world's tallest palm trees or colorful Guatape city should be also on your list!",
      'https://player.vimeo.com/video/260560758',
      '../../../assets/Travel/Expand/Columbia/Columbia1.JPG',
      '../../../assets/Travel/Expand/Columbia/Columbia1min.jpg',
      '../../../assets/Travel/Expand/Columbia/Columbia2.JPG',
      '../../../assets/Travel/Expand/Columbia/Columbia2min.jpg',
      '../../../assets/Travel/Expand/Columbia/Columbia3.JPG',
      '../../../assets/Travel/Expand/Columbia/Columbia3min.jpg'
    ),
    new TravelExpand (
      7,
      "Driving through Ecuador was like attending a medieval fashion show: each village had own traditional outfit. Most of these outfits gave off an intense smell of herbs or stable animals, which we did not like so much especially when sharing bus on winding mountain roads... But the Ecuadorian views made up for everything! Did you know the point on the earth that's closest to the Moon? No, it's not Mount Everest. It is the mount Chimborazo in Ecuador! It is not the highest mountain, but it is so close to the equaitor that it's summit is the farthest point from the Earth's center. ",
      'https://player.vimeo.com/video/262304565',
      '../../../assets/Travel/Expand/Ecuador/Ecuador1.jpg',
      '../../../assets/Travel/Expand/Ecuador/Ecuador1min.jpg',
      '../../../assets/Travel/Expand/Ecuador/Ecuador2.jpg',
      '../../../assets/Travel/Expand/Ecuador/Ecuador2min.jpg',
      '../../../assets/Travel/Expand/Ecuador/Ecuador3.jpg',
      '../../../assets/Travel/Expand/Ecuador/Ecuador3min.jpg',
    ),
    new TravelExpand (
      8,
      "Discovering Vietnam on a motorbike was very interesting experience, not necessarily the safest one. Whole Wietnam is a beautiful country. The greatlimestone formations in Ha Long Bay, Tam Coc province with it's lush green rice terraces, mysterious ruins of old temples in Hoi An... But not everything in Vietnam was so wonderful. Almost 50 years have passed since the end of the war, but the effects are still clearly visible. The Vietnamese have not always been warm and friendly, but their recent history may explain this behavior. Labirynths of tiny tunnels show how they lived during war. The brutal traps, terrible weapons and it's horrible effect everybody can see in War Remnants Museum in Ho Chi Minh.",
      'https://player.vimeo.com/video/228630285',
      '../../../assets/Travel/Expand/VietNam/Vietnam1.jpg',
      '../../../assets/Travel/Expand/VietNam/Vietnam1min.jpg',
      '../../../assets/Travel/Expand/VietNam/Vietnam2.jpg',
      '../../../assets/Travel/Expand/VietNam/Vietnam2min.jpg',
      '../../../assets/Travel/Expand/VietNam/Vietnam3.jpg',
      '../../../assets/Travel/Expand/VietNam/Vietnam3min.jpg'
    ),
    new TravelExpand (
      9,
      "Greece is our second home, place where love to spend summer time. Rhodes island has been hosted us on the last few years. Prasonissi beach with a friendly windsurfing station Wind4Fun is a place where we would like to come again and again. Not only wonderful kitesurfing conditions make us coming back. Great greek food is known all over the world. You won't get better greek salad, mousaka or paputzaki anywhere. But the real masterpiece is baclava from Gennadi's bakery!",
      'https://player.vimeo.com/video/240065386',
      '../../../assets/Travel/Expand/Greece/Greece1.jpg',
      '../../../assets/Travel/Expand/Greece/Greece1min.jpg',
      '../../../assets/Travel/Expand/Greece/Greece2.JPG',
      '../../../assets/Travel/Expand/Greece/Greece2min.jpg',
      '../../../assets/Travel/Expand/Greece/Greece3.JPG',
      '../../../assets/Travel/Expand/Greece/Greece3min.jpg'
    ),
    new TravelExpand (
      10,
      'We both love snowboarding but in the last few years there has been very little snow in Poland. If we wanted to ride we had to look elsewhere for powder. The Alpes became our favourite winter destination. Working with Snowevents gave us the opportunity to spend the entire season in the mountains. We were there every time bigger snowfall was coming, ready to make the first line!',
      'https://player.vimeo.com/video/249211736',
      '../../../assets/Travel/Expand/Alpes/Alpes1.jpg',
      '../../../assets/Travel/Expand/Alpes/Alpes1min.jpg',
      '../../../assets/Travel/Expand/Alpes/Alpes2.jpg',
      '../../../assets/Travel/Expand/Alpes/Alpes2min.jpg',
      '../../../assets/Travel/Expand/Alpes/Alpes3.jpg',
      '../../../assets/Travel/Expand/Alpes/Alpes3min.jpg'
    ),
    new TravelExpand (
      11,
      'Wake up, breakfast, surfing, chill. Dinner, chill, surfing, rest. Great, simple life. Same scenario for 10 wonderful days. Away from civilisation, we had a few surf spots in Popoyo to choose from. Some works well at high tide, while others better at lower water levels, so there is always great time for surfing.',
      'https://player.vimeo.com/video/256310533',
      '../../../assets/Travel/Expand/Nica/Nica1.jpg',
      '../../../assets/Travel/Expand/Nica/Nica1min.jpg',
      '../../../assets/Travel/Expand/Nica/Nica2.jpg',
      '../../../assets/Travel/Expand/Nica/Nica2min.jpg',
      '../../../assets/Travel/Expand/Nica/Nica3.jpg',
      '../../../assets/Travel/Expand/Nica/Nica3min.jpg'
    )
  ];

  // WITH FIRST PAGE LOADING
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
