import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpaswordComponent } from './forgetpasword.component';

describe('ForgetpaswordComponent', () => {
  let component: ForgetpaswordComponent;
  let fixture: ComponentFixture<ForgetpaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpaswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
