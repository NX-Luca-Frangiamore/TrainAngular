import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePasswordPanelComponent } from './delete-password-panel.component';

describe('DeletePasswordPanelComponent', () => {
  let component: DeletePasswordPanelComponent;
  let fixture: ComponentFixture<DeletePasswordPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePasswordPanelComponent],
    });
    fixture = TestBed.createComponent(DeletePasswordPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
