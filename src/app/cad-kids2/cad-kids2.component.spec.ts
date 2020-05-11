import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadKids2Component } from './cad-kids2.component';

describe('CadKids2Component', () => {
  let component: CadKids2Component;
  let fixture: ComponentFixture<CadKids2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadKids2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadKids2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
