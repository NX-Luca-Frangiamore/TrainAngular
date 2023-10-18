import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePasswordPanelComponent } from './save-password-panel.component';

describe('SavePasswordPanelComponent', () => {
  let component: SavePasswordPanelComponent;
  let fixture: ComponentFixture<SavePasswordPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavePasswordPanelComponent]
    });
    fixture = TestBed.createComponent(SavePasswordPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
