import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadKidsComponent } from './cad-kids.component';

describe('CadKidsComponent', () => {
  let component: CadKidsComponent;
  let fixture: ComponentFixture<CadKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
