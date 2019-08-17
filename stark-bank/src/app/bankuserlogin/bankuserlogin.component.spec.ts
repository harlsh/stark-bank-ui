import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankuserloginComponent } from './bankuserlogin.component';

describe('BankuserloginComponent', () => {
  let component: BankuserloginComponent;
  let fixture: ComponentFixture<BankuserloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankuserloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankuserloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
