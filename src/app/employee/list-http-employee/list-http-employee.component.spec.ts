import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHttpEmployeeComponent } from './list-http-employee.component';

describe('ListHttpEmployeeComponent', () => {
  let component: ListHttpEmployeeComponent;
  let fixture: ComponentFixture<ListHttpEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHttpEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHttpEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
