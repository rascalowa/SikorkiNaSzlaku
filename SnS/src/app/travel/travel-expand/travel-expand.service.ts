import { Injectable } from "@angular/core";
import { clear } from 'console';

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
  }

  open(id: string) {
    //open modal specified by id
    const modal = this.modals.find(x => x.id === id);
    console.log(modal);
    modal.open();
  }

  close(id: string) {//id=expand
    const modal = this.modals.find(x => x.id === id);
    if (modal){
    modal.close();
    this.remove(id);
    }
  }

  clear() {
    this.modals = [];
  }
}

