import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayServiceService {
  domElement = null;
  html = document.querySelector('html');
  body = document.querySelector('body');

  constructor() { }

  show() {
    if (!this.domElement) {
      this.domElement = document.querySelector('.overlay')
    }
    this.domElement.style.display = 'block';
    this.html.classList.add('no-scroll');
    this.body.classList.add('no-scroll');
  }

  hide() {
    if (!this.domElement) {
      this.domElement = document.querySelector('.overlay')
    }
    this.domElement.style.display = 'none';
    this.html.classList.remove('no-scroll');
    this.body.classList.remove('no-scroll');
  }
}
