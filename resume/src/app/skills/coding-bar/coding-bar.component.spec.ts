import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingBarComponent } from './coding-bar.component';

describe('CodingBarComponent', () => {
  let component: CodingBarComponent;
  let fixture: ComponentFixture<CodingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
