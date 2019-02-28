import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { 
  }

  getInfo() {
    const url = 'https://restcountries.eu/rest/v2/all';

    return this.http.get(url);
  }

}
