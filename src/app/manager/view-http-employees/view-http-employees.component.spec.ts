import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHttpEmployeesComponent } from './view-http-employees.component';

describe('ViewHttpEmployeesComponent', () => {
  let component: ViewHttpEmployeesComponent;
  let fixture: ComponentFixture<ViewHttpEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHttpEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHttpEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
