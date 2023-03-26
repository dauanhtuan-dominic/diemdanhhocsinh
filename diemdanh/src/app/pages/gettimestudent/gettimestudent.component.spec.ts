import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettimestudentComponent } from './gettimestudent.component';

describe('GettimestudentComponent', () => {
  let component: GettimestudentComponent;
  let fixture: ComponentFixture<GettimestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettimestudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettimestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
