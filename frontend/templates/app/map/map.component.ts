import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { APIService } from '../API.service';

interface Location {
  Lat: number;
  Lon: number;
}

interface Doctor {
  Location: [number, number]; // Tuple for latitude and longitude
  Info: {
    number: number;
  };
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  constructor(private API: APIService) {}
  ngOnInit() {
    this.initializeMap();
  }

  private marker(WoW: Doctor): string {
    return '' + WoW.Location;
  }

  private initializeMap() {
    // Initialize the map centered on a default location
    this.map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Get the user's location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          // Center the map on the user's location
          this.map.setView([userLat, userLng], 13);

          // Add a marker at the user's location
          L.marker([userLat, userLng])
            .addTo(this.map)
            .bindPopup('Your Location')
            .openPopup();



          this.API.getDoctors(userLat, userLng, 20).subscribe(
            ({ DOCTORS: DOCTORS }) => {
              for (let i = 0; i < DOCTORS.length; i++) {
                L.marker(DOCTORS[i].Location)
                  .addTo(this.map)
                  .bindPopup(this.marker(DOCTORS[i]))
                  .openPopup();
              }
              // L.marker([data.latitude, data.longitude]).addTo(this.map)
              //   .bindPopup('BRUH').openPopup();
              console.log({ DOCTORS: DOCTORS });
            }
          );
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
