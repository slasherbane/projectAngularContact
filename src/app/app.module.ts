import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormContactComponent } from './component/form-contact/form-contact.component';
import { CoreService } from './service/core.service';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { ContactEditorComponent } from './component/contact-editor/contact-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
 MatFormFieldModule

@NgModule({
  declarations: [
    AppComponent,
    FormContactComponent,
    ContactListComponent,
    ContactEditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
