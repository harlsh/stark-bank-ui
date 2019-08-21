import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaketransactionComponent } from './maketransaction.component';

describe('MaketransactionComponent', () => {
  let component: MaketransactionComponent;
  let fixture: ComponentFixture<MaketransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaketransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaketransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
