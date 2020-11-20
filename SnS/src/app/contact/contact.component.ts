import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app.component.css']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contactService: ContactService) { }


  ngOnInit(): void {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Content: new FormControl('', [Validators.required])
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(FormData) {
    console.log(FormData)
    this.contactService.SendMessage(FormData)
    .subscribe(response => {
    location.href = 'https://mailthis.to/confirm'
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
    }
}
