import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcardtermComponent } from './editcardterm.component';

describe('EditcardtermComponent', () => {
  let component: EditcardtermComponent;
  let fixture: ComponentFixture<EditcardtermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcardtermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcardtermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
