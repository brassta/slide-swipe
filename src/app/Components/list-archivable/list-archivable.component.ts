import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'agenzzia-list-archivable',
  templateUrl: './list-archivable.component.html',
  styleUrls: ['./list-archivable.component.less'],
  animations: [
    trigger('menuItemState', [
      state('untouched', style({
        backgroundColor: 'green'
      })),

      state('initial', style({
        transform: 'translate3d(0,0,0)',
        backgroundColor: 'tomato'
      })),
      state('archived', style({
        transform: 'translate3d(-500px,0,0)',
        // transform: 'translate3d({{droppedState}}px, 0 ,0)',
        backgroundColor: 'blue'
      }), {params: {droppedState: 0}}),
      transition('untouched => initial', [animate(100)]),
      transition('untouched => archived', [animate(400)]),
      transition('initial => untouched', [animate(0)])
    ])
  ]
})
export class ListArchivableComponent implements OnInit {
  isArchived = false;
  menuItemState = 'untouched';
  droppedState;
  resetPosition: any;
  constructor() { }

  ngOnInit() {
  }

  drop($event) {

    console.log('dropped', $event.distance.x);
    console.log($event.source.element.nativeElement.dataset.offset);
    let totalOffset = +$event.source.element.nativeElement.dataset.offset + $event.distance.x;
    $event.source.element.nativeElement.dataset.offset = totalOffset;
    this.droppedState = totalOffset;
    console.log('total', totalOffset);
    if (totalOffset < -100) {
      this.menuItemState = 'archived'
    } else {
      this.menuItemState = 'initial'
      $event.source.element.nativeElement.dataset.offset = 0;
    }
  }

  animationFinished($event) {
    console.log('ene jebote', $event.toState);
    if ($event.toState === 'initial') {
      console.log('vratio');
      this.menuItemState = 'untouched';
      this.droppedState = 0;
      this.resetPosition = {x:0, y:0}
    }
    else if($event.toState === 'archived'){
      this.isArchived = true;
    }
  }

  clicked($event: MouseEvent) {
    console.log('vidimo se');
  }
}
