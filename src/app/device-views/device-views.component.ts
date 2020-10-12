import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { ThemePalette } from '@angular/material/core';
import { EventEmitter } from 'protractor';
import { DeviceViewComponent } from '../device-view/device-view.component';

@Component({
  selector: 'app-device-views',
  templateUrl: './device-views.component.html',
  styleUrls: ['./device-views.component.scss']
})
export class DeviceViewsComponent implements OnInit {
  devices: MediaDeviceInfo[];
  @ViewChildren('devicecomponent') deviceViews: QueryList<DeviceViewComponent>;

  constructor() { }

  ngOnInit() {
    navigator.mediaDevices.enumerateDevices()
      .then((deviceInfos: MediaDeviceInfo[]) => {
        this.devices = deviceInfos;
        this.devices = this.devices.filter(device => device.kind.includes('video'));
      })
      .catch((error: any) => console.log(error.name + ": " + error.message));
  }

  onSelectChange(event: MatTabChangeEvent) {
    console.log('Selected Tab = ', event.index);
    console.log('Devices: ', this.deviceViews.length);

    this.deviceViews.forEach(deviceView => {
      deviceView.stopVideo();
    });

    this.deviceViews.find(device => device.deviceInfo.label === event.tab.textLabel).startVideoStream();
  }

}

