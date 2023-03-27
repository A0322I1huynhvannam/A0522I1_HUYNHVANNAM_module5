import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculotorComponent } from './calculotor.component';

describe('CalculotorComponent', () => {
  let component: CalculotorComponent;
  let fixture: ComponentFixture<CalculotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
