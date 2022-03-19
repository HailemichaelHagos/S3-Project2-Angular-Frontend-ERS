import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHttpExpensesComponent } from './show-http-expenses.component';

describe('ShowHttpExpensesComponent', () => {
  let component: ShowHttpExpensesComponent;
  let fixture: ComponentFixture<ShowHttpExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHttpExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHttpExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
