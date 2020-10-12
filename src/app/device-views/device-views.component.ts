import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
//import { MdTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-device-views',
  templateUrl: './device-views.component.html',
  styleUrls: ['./device-views.component.scss']
})
export class DeviceViewsComponent implements OnInit {
  devices: MediaDeviceInfo[];

  constructor() { }

  ngOnInit() {
    //  this.devices = [
    //    { label: "headphones", kind: "audiooutput" },
    //    { label: "microphone", kind: "audioinput" },
    //    { label: "camera", kind: "video" }
    //  ];

    navigator.mediaDevices.enumerateDevices()
      .then((deviceInfos: MediaDeviceInfo[]) => this.devices = deviceInfos)
      .catch((error: any) => console.log(error.name + ": " + error.message));

  }

  onSelectChange(event: MatTabChangeEvent) {
    console.log('Selected Tab = ', event.index);

    event.tab.textLabel += ' +';
  }

}

