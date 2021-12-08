import { core } from '@angular/compiler';
import { Component } from '@angular/core';
import Contact from './model/contact';
import { CoreService } from './service/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projetContact';
  contactEdition: Contact | undefined;
  indexEdition: Number | undefined;

  contacts: Contact[];
  constructor(private core: CoreService) {
    this.contacts = this.core.getContacts();
  }

  saveContact(event: any): void {
    this.contacts.push(event.contact);
    console.log(this.contacts);
    this.core.setLocalIndex('contacts', this.contacts);
  }

  updateContact(event: any) {


   this.contacts[event.index] = event.change;

    this.core.setLocalIndex('contacts', this.contacts);
    this.contacts = this.core.getContacts();
  }

  edit(event: any) {
    this.contactEdition = event.edit;
    console.log(event.edit)
    this.indexEdition = event.index;
  }
}
