import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { APIService } from '../API.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: L.Map;


  constructor( private API: APIService ) {}
  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    // Initialize the map centered on a default location
    this.map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Get the user's location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        // Center the map on the user's location
        this.map.setView([userLat, userLng], 13);

        // Add a marker at the user's location
        L.marker([userLat, userLng]).addTo(this.map)
          .bindPopup('Your Location').openPopup();

          this.API.getDoctors(userLat, userLng, 20).subscribe((data:any) => {
            for (let i = 0; i < data.DOCTORS.length; i++) {
              L.marker(data.DOCTORS[i].Location).addTo(this.map)
                    .bindPopup("<button onclick='console.log(\"Thank you\")'>clickme</button>").openPopup();

            }
            // L.marker([data.latitude, data.longitude]).addTo(this.map)
            //   .bindPopup('BRUH').openPopup();
            console.log(data);});


      }, (error) => {
        console.error('Error getting user location:', error);
      });



    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

}
