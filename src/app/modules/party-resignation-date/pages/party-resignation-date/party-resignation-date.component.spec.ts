import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyResignationDateComponent } from './party-resignation-date.component';

describe('PartyResignationDateComponent', () => {
  let component: PartyResignationDateComponent;
  let fixture: ComponentFixture<PartyResignationDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyResignationDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyResignationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
