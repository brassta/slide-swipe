import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from "@angular/cdk/drag-drop";

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListArchivableComponent } from './Components/list-archivable/list-archivable.component';

@NgModule({
  declarations: [
    AppComponent,
    ListArchivableComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
