import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReimbursmentComponent } from './add-reimbursment.component';

describe('AddReimbursmentComponent', () => {
  let component: AddReimbursmentComponent;
  let fixture: ComponentFixture<AddReimbursmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReimbursmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReimbursmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
