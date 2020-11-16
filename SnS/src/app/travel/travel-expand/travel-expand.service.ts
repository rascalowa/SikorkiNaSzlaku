import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TravelExpandService {
  expandId: number;
  private modals: any[] = [];

  add(modal: any) {
    //adds modal to an array
    this.modals.push(modal);
  }

  remove(id: string) {
    //removes modal from that array
    this.modals = this.modals.filter(x => x.id === id);
    console.log('remove service')
  }

  open(id: string) {
    //open modal specified by id
    const modal = this.modals.find(x => x.id === id);
    modal.open();
  }

    // X - 2
  close(id: string) {
    //close modal with specified id
    const modal = this.modals.find(x => x.id === id);
    modal.close();
    console.log('closes service')
  }
}

