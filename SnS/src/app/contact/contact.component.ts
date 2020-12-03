import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact.service';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app.component.css']
})
export class ContactComponent {
  messageSended = false;
  isLoading = false;
  error: string = null;
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor(
    private contactService: ContactService
    ) { }

  onSubmit(FormData: NgForm) {
    this.isLoading = true;
    this.contactService.sendMessage(FormData.value)
      .subscribe(() => {
        this.messageSended = true;
        this.isLoading = false;
      }, error => {
        this.error = error;
        this.isLoading = false;
        console.log({ error })
      })
    FormData.reset();
  }

  onClose() {
    this.messageSended = false;
  }

  onCloseError() {
    this.error = null;
  }

  onDestroy() {
    this.messageSended = false;
  }
}
