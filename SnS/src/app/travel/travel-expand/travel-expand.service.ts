import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TravelExpandService {
  expandId: number;
  private modals: any[] = [];

  // WITH FIRST PAGE LOADING
  add(modal: any) {
    //adds modal to an array
    this.modals.push(modal);
    console.log("TES add");
    console.log(this.modals);
  }

  // WHEN Close modal
  // to avoid memory leaks
  remove(id: string) {
    //removes modal from that array
    this.modals = this.modals.filter(x => x.id === id);
    console.log('TES remove');
  }

  // WHEN OPEN MODAL
  //O-2
  open(id: string) {
    //open modal specified by id
    const modal = this.modals.find(x => x.id === id);
    console.log(modal);
    modal.open();
    //O-4
    console.log("TES open");
  }

  // WHEN CLOSE MODAL ON BUTTON
    // X - 2
    // BG - 2
  close(id: string) {//id=expand
    const modal = this.modals.find(x => x.id === id);
    if (modal){
    //close modal with specified id
    modal.close();
    this.remove(id);
    console.log('TES close');
    }

  }
}

