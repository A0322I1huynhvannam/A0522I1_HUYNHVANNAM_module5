import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducEditComponent } from './produc-edit.component';

describe('ProducEditComponent', () => {
  let component: ProducEditComponent;
  let fixture: ComponentFixture<ProducEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
