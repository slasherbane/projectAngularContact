import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Contact from 'src/app/model/contact';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'ContactList',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  @Output() editorEvent = new EventEmitter();
  @Input() contacts!: Contact[];
  editIndex: Number | undefined;
  constructor(private core: CoreService) {}

  ngOnInit(): void {}

  edit(index: any) {
    this.editIndex = index;
    let contact = this.contacts[index];
    this.editorEvent.emit({ edit: contact, index: index });
  }
}
