import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Contact from 'src/app/model/contact';


@Component({
  selector: 'FormContact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {


  contactForm: any;
  contact = new Contact();
  @Output() saveEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      fullname: ['', Validators.min(3)],
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    })

  }

  ngOnInit(): void {
  }

  save() {

    this.contact.fullname = this.contactForm.get("fullname").value;
    this.contact.username = this.contactForm.get("username").value
    this.contact.email = this.contactForm.get("email").value;
    this.contactForm.reset();

    this.saveEvent.emit({ contact: this.contact });

  }

}
