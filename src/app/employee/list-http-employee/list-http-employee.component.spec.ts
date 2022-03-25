import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';

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


  it('should create label', () => {
    const fixture = TestBed.createComponent(ListHttpEmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div h3')?.textContent).toContain('EMPLOYEES INFORMATION');
  });
});
