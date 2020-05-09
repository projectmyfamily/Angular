import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAdultoComponent } from './cad-adulto.component';

describe('CadAdultoComponent', () => {
  let component: CadAdultoComponent;
  let fixture: ComponentFixture<CadAdultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadAdultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
