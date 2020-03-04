import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesejosComponent } from './desejos.component';

describe('DesejosComponent', () => {
  let component: DesejosComponent;
  let fixture: ComponentFixture<DesejosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesejosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
