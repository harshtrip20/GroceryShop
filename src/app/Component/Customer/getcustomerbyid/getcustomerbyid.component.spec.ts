import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcustomerbyidComponent } from './getcustomerbyid.component';

describe('GetcustomerbyidComponent', () => {
  let component: GetcustomerbyidComponent;
  let fixture: ComponentFixture<GetcustomerbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcustomerbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcustomerbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
