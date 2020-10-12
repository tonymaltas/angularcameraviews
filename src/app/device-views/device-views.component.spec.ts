import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceViewsComponent } from './device-views.component';

describe('DeviceViewsComponent', () => {
  let component: DeviceViewsComponent;
  let fixture: ComponentFixture<DeviceViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
