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


  constructor() { }

  ngOnInit() {
    console.log('OnInit ', this.deviceInfo.label);
  }

  ngAfterViewInit(){
    console.log('AfterViewInit ', this.deviceInfo.label);
    this.updateVideoStream();
  }

  getDateTime()
  {
    //console.log('Get Date Time ', this.deviceInfo.kind);

    return new Date();
  }

  updateVideoStream()
  {
    if (this.deviceInfo.kind.includes("video") /*&& this.deviceInfo.label.includes("back")*/)
    {
      const constraints: MediaStreamConstraints = { video: {deviceId: this.deviceInfo.deviceId}, audio: false};
      //let video = document.querySelector("video");
      //video.hidden = false;
      //this.videoElement.nativeElement.hidden = false;
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream: MediaStream) => {this.videoElement.nativeElement.srcObject = stream; console.log('Set stream: ', this.deviceInfo.label);
        })
        .catch((error: any) => console.log(error.name + ": " + error.message));
      ;
    }
  }

}
