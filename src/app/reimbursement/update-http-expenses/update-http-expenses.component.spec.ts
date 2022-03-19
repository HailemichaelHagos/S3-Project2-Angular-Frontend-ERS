import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHttpExpensesComponent } from './update-http-expenses.component';

describe('UpdateHttpExpensesComponent', () => {
  let component: UpdateHttpExpensesComponent;
  let fixture: ComponentFixture<UpdateHttpExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHttpExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHttpExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
