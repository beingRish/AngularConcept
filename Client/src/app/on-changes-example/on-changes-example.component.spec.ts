import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesExampleComponent } from './on-changes-example.component';

describe('OnChangesExampleComponent', () => {
  let component: OnChangesExampleComponent;
  let fixture: ComponentFixture<OnChangesExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnChangesExampleComponent]
    });
    fixture = TestBed.createComponent(OnChangesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
