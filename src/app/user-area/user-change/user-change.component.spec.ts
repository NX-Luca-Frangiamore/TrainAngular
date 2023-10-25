import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChangeComponent } from './user-change.component';

describe('UserChangeComponent', () => {
  let component: UserChangeComponent;
  let fixture: ComponentFixture<UserChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserChangeComponent],
    });
    fixture = TestBed.createComponent(UserChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
