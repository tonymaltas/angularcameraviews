import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit, AfterViewInit {

  @ViewChild('videoel', {static: false}) videoElement: ElementRef;
  @Input() deviceInfo: MediaDeviceInfo;
  videosrc: String;
  stream: MediaStream;


  constructor() { }

  ngOnInit() {
    if (this.deviceInfo)
      console.log('OnInit ', this.deviceInfo.label);
  }

  ngAfterViewInit(){
    if (this.deviceInfo)
    {
      console.log('AfterViewInit ', this.deviceInfo.label);
    }
  }

  getDateTime()
  {
    console.log('Get Date Time ', this.deviceInfo.kind);
    return new Date();
  }

  stopVideo()
  {
    console.log('Stop Stream ', this.deviceInfo.label);

    if(this.stream)
    {
      console.log('Stopping... ', this.deviceInfo.label);
      let tracks = this.stream.getTracks();
      console.log('tracks ', tracks.length);

      tracks.forEach(track => {
        track.stop();
      });
      console.log('Stopped. ', this.deviceInfo.label);
    }
  }

  startVideoStream()
  {
    console.log('Start Video Stream ', this.deviceInfo.label);

    if (this.deviceInfo.kind.includes("video"))
    {
      const constraints: MediaStreamConstraints = { video: {deviceId: this.deviceInfo.deviceId}, audio: false};

      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream: MediaStream) => {
          this.videoElement.nativeElement.srcObject = stream;
          this.stream = stream;
          console.log('Set stream: ', this.deviceInfo.label);
        })
        .catch((error: any) => console.log(error.name + ": " + error.message));
      ;
    }
  }

}
