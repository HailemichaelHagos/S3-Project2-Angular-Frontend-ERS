import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplooadFileComponent } from './uplooad-file.component';

describe('UplooadFileComponent', () => {
  let component: UplooadFileComponent;
  let fixture: ComponentFixture<UplooadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplooadFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UplooadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
