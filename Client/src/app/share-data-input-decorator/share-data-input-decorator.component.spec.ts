import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDataInputDecoratorComponent } from './share-data-input-decorator.component';

describe('ShareDataInputDecoratorComponent', () => {
  let component: ShareDataInputDecoratorComponent;
  let fixture: ComponentFixture<ShareDataInputDecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareDataInputDecoratorComponent]
    });
    fixture = TestBed.createComponent(ShareDataInputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
