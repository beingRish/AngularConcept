import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaftercontentinitNgaftercontentcheckedComponent } from './ngaftercontentinit-ngaftercontentchecked.component';

describe('NgaftercontentinitNgaftercontentcheckedComponent', () => {
  let component: NgaftercontentinitNgaftercontentcheckedComponent;
  let fixture: ComponentFixture<NgaftercontentinitNgaftercontentcheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgaftercontentinitNgaftercontentcheckedComponent]
    });
    fixture = TestBed.createComponent(NgaftercontentinitNgaftercontentcheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
