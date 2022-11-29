import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DatahandlerService , PeoplehandlerService } from './datahandler.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ListComponent],
  bootstrap: [AppComponent],
  providers:[DatahandlerService,PeoplehandlerService],
})
export class AppModule {}
