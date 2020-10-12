import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatCardModule, MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule, MatTabsModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { DeviceViewsComponent } from './device-views/device-views.component';
import { DeviceViewComponent } from './device-view/device-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeviceViewsComponent,
    DeviceViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
