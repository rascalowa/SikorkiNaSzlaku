import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ContactService } from './contact.service';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app.component.css']
})
export class ContactComponent {
  // FormData: FormGroup;
  messageSended = false;
  isLoading = false;
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor(private builder: FormBuilder, private contactService: ContactService) { }

  // ngOnInit(): void {
  //   // this.FormData = this.builder.group({
  //   //   Name: new FormControl('', [Validators.required]),
  //   //   Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
  //   //   Content: new FormControl('', [Validators.required])
  //   // })
  // }
  // ADD VALIDATORS!!

  onSubmit(FormData) {
    console.log(FormData)
    this.isLoading = true;
    this.contactService.sendMessage(FormData)
    .subscribe(response => {
    console.log("Your message was send successfully!")
    this.messageSended = true;
    this.isLoading = false;
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
  }

  onClose() {
    this.messageSended = false;
  }

  onDestroy() {
    this.messageSended = false;
  }
    // ADD THANK YOU SITE, REDIRECT
}
