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
  }

  // WHEN CHANGING PAGE - NG ON DESTROY RUNS
  remove(id: string) {
    //removes modal from that array
    this.modals = this.modals.filter(x => x.id === id);
    console.log('TES remove');
  }

  // WHEN OPEN MODAL
  open(id: string) {
    //open modal specified by id
    const modal = this.modals.find(x => x.id === id);
    modal.open();
    // console.log(modal);//TravelExpandComponent
    console.log("TES open");
  }

  // WHEN CLOSE MODAL ON BUTTON
  // CALLED TWICE???
    // X - 2
    // BG - 2
  close(id: string) {//id=expand
    const modal = this.modals.find(x => x.id === id);
    if (modal){
    //close modal with specified id
    // console.log(modal);//TravelExpandComponent firstcall //undefined secondcall
    modal.close();
    this.remove(id);

    console.log('TES close');
    }

  }
}

