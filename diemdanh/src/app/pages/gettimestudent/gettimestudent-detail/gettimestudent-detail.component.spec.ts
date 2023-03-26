import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettimestudentDetailComponent } from './gettimestudent-detail.component';

describe('GettimestudentDetailComponent', () => {
  let component: GettimestudentDetailComponent;
  let fixture: ComponentFixture<GettimestudentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettimestudentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettimestudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
