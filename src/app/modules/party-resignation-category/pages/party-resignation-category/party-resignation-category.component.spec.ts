import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyResignationCategoryComponent } from './party-resignation-category.component';

describe('PartyResignationCategoryComponent', () => {
  let component: PartyResignationCategoryComponent;
  let fixture: ComponentFixture<PartyResignationCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyResignationCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyResignationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
