import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDataOutputDecoratorComponent } from './share-data-output-decorator.component';

describe('ShareDataOutputDecoratorComponent', () => {
  let component: ShareDataOutputDecoratorComponent;
  let fixture: ComponentFixture<ShareDataOutputDecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareDataOutputDecoratorComponent]
    });
    fixture = TestBed.createComponent(ShareDataOutputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
