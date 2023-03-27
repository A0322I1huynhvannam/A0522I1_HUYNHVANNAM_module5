import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducDeleteComponent } from './produc-delete.component';

describe('ProducDeleteComponent', () => {
  let component: ProducDeleteComponent;
  let fixture: ComponentFixture<ProducDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
