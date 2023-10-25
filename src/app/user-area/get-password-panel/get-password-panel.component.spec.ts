import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPasswordPanelComponent } from './get-password-panel.component';

describe('GetPasswordPanelComponent', () => {
  let component: GetPasswordPanelComponent;
  let fixture: ComponentFixture<GetPasswordPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPasswordPanelComponent],
    });
    fixture = TestBed.createComponent(GetPasswordPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
