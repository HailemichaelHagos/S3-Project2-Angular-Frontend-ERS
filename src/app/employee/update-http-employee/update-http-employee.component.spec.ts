import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHttpEmployeeComponent } from './update-http-employee.component';

describe('UpdateHttpEmployeeComponent', () => {
  let component: UpdateHttpEmployeeComponent;
  let fixture: ComponentFixture<UpdateHttpEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHttpEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHttpEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
