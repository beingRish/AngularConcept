import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInitExampleComponent } from './on-init-example.component';

describe('OnInitExampleComponent', () => {
  let component: OnInitExampleComponent;
  let fixture: ComponentFixture<OnInitExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnInitExampleComponent]
    });
    fixture = TestBed.createComponent(OnInitExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
