import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasswordPanelComponent } from './add-password-panel.component';

describe('AddPasswordPanelComponent', () => {
  let component: AddPasswordPanelComponent;
  let fixture: ComponentFixture<AddPasswordPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPasswordPanelComponent],
    });
    fixture = TestBed.createComponent(AddPasswordPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
