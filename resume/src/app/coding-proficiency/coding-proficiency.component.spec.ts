import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingProficiencyComponent } from './coding-proficiency.component';

describe('CodingProficiencyComponent', () => {
  let component: CodingProficiencyComponent;
  let fixture: ComponentFixture<CodingProficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingProficiencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingProficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
