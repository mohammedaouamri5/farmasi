// profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiUrl:string = 'API';

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profiles`);
  }

  createProfile(profileData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CreateProfile`, profileData);
  }

  getProfile(num: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetProfile?num=${num}`);
  }
  login(profileData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/LoginProfile`, profileData);
  }
}
