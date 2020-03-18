import { Component, OnInit } from '@angular/core';
import * as atlas from 'azure-maps-control';
// import * as atlas from 'azure-maps-drawing-tools';
// import * as atlas from 'azure-maps-spatial-io';


@Component({
  selector: 'app-azureMap',
  templateUrl: './azureMap.component.html',
  styleUrls: ['./azureMap.component.css']
})

export class AzureMapComponent implements OnInit {
  // Azure Active Directory Authentication Client ID
  // or Shared Key Authentication KEY
  // get it from portal.azure.com
  key: string = 'TfUWvWqVnTGKGMcIvxr5coNt7eiWrKxh6wJe0keVZSs';
  map: any;
  drawingManager: any;
  controls: [];

  constructor(
  ) {
  }

  ngOnInit() {
    //Initialize a map instance.
    this.map = new atlas.Map('mapContainer', {
      center: [-122.33, 47.6],
      zoom: 12,
      view: 'Auto',

      authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: this.key
      }
    });

    //Wait until the map resources are ready.
    this.map.events.add('ready', () => {
      //Create a HTML marker and add it to the map.
      // this.map.markers.add(new atlas.HtmlMarker({
      //   color: 'DodgerBlue',
      //   text: '10',
      //   position: [0, 0]
      // }));
      //Create an instance of the drawing manager and display the drawing toolbar.
      // drawingManager = new atlas.drawing.DrawingManager(this.map, {
      //   toolbar: new atlas.control.DrawingToolbar({
      //     position: 'top-left',
      //     style: 'light'
      //   })
      // });
    });
  }

}
