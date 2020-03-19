import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AzureMapComponent } from './azureMap/azureMap.component';

// import {AmModule, LoadMapService} from "@acaisoft/angular-azure-maps";
// import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([
    //   { path: '', component: ProductListComponent },
    // ])
  ],
  declarations: [
    // DashboardComponent,
    AppComponent,
    TopBarComponent,
    AzureMapComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
