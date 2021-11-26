import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetadminbyidComponent } from './getadminbyid.component';

describe('GetadminbyidComponent', () => {
  let component: GetadminbyidComponent;
  let fixture: ComponentFixture<GetadminbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetadminbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetadminbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
