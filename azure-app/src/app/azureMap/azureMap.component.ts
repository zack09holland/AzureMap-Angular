import { Component, OnInit } from '@angular/core';
// import * as atlas from 'azure-maps-control';
import * as atlas from 'azure-maps-control';
import * as atlasDraw from 'azure-maps-drawing-tools';
// import * as atlas from 'azure-maps-spatial-io';


import {KeyService} from "../Utils/key.service";

// declare const addControlsObj: any;

@Component({
  selector: 'app-azureMap',
  templateUrl: './azureMap.component.html',
  styleUrls: ['./azureMap.component.css']
})

export class AzureMapComponent implements OnInit {
  // Azure Active Directory Authentication Client ID
  // or Shared Key Authentication KEY
  // get it from portal.azure.com
  key: string = '';
  map: any;
  drawingManager: any;
  

  constructor(private keyService: KeyService
  ) {
  }

  ngOnInit() {
    this.key = this.keyService.getKey();
    //Initialize a map instance.
    this.map = new atlas.Map('mapContainer', {
      center: [-122.33, 47.6],
      zoom: 12,
      view: 'Auto',

      authOptions: {
        authType: atlas.AuthenticationType.subscriptionKey,
        subscriptionKey: this.key
      }
    });
    

    //When the map loads add the necessary toolbars
    this.map.events.add('ready', () => {
      
      this.drawingManager = new atlasDraw.drawing.DrawingManager(this.map, {
          toolbar: new atlasDraw.control.DrawingToolbar({
            position: 'top-left',
            style: 'light'
          })
        });
      this.addControls()
    })//end of maps.event.add when ready
  }//end of intial load
  
  //Create a HTML marker and add it to the map.
  addMarker() {
    let marker = new atlas.HtmlMarker({
      color: 'DodgerBlue',
          text: '10',
          position: [-122.33, 47.6]
    });
    this.map.markers.add(marker);
  }
  
  //Map control functionality.
  addControls() {
    var controls = new Array();
      // this.map.controls.add([
      // new atlas.control.ZoomControl(),
      // new atlas.control.CompassControl(),
      // new atlas.control.PitchControl(),
      // new atlas.control.StyleControl()
      // ], {
      //     position: "top-right"
      // });
    //Create a zoom control.
    controls.push(new atlas.control.ZoomControl({
      zoomDelta: 1,
      style: atlas.ControlStyle.light
    }));

    //Create a pitch control and add it to the map.
    controls.push(new atlas.control.PitchControl({
      pitchDegreesDelta: 5,
      style: atlas.ControlStyle.light
    }));

    //Create a compass control and add it to the map.
    controls.push(new atlas.control.CompassControl({
      rotationDegreesDelta: 10,
      style: atlas.ControlStyle.light
    }));

    //Create a style control and add it to the map.
    controls.push(new atlas.control.StyleControl({
      style: atlas.ControlStyle.light,
      // mapStyles: mapStyles,
      // layout: pickerLayout
    }));

    //Add controls to the map.
    this.map.controls.add(controls, {
      position: "top-right"
    });

}

  
}
