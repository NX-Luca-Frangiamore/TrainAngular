import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAreaComponent } from './user-area.component';

describe('UserAreaComponent', () => {
  let component: UserAreaComponent;
  let fixture: ComponentFixture<UserAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAreaComponent],
    });
    fixture = TestBed.createComponent(UserAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
