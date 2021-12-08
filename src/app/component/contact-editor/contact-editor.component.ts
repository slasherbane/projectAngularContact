import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Contact from 'src/app/model/contact';

@Component({
  selector: 'ContactEditor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.scss'],
})
export class ContactEditorComponent implements OnInit {
  @Input() contact?: Contact;
  @Input() index: Number | undefined;
  @Output() validationEditorChange = new EventEmitter();

  constructor() {

    console.log(this.contact)
  }

  ngOnInit(): void {}

  change(event: any) {

    if(event.target.value < 3){
      return;
    }


    this.contact!._fullname = event.target.value;

    this.validationEditorChange.emit({
      change: this.contact,
      index: this.index,
    });
  }
}
