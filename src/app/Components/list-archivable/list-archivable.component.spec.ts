import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArchivableComponent } from './list-archivable.component';

describe('ListArchivableComponent', () => {
  let component: ListArchivableComponent;
  let fixture: ComponentFixture<ListArchivableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArchivableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArchivableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
