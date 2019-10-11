import {Component, OnInit} from '@angular/core';
import {DataClass} from "./Data/data";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'agenzzia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],

})

export class AppComponent implements OnInit {
  title = 'slide-swipe';


  ngOnInit(): void {
  }


}
