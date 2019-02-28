import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  paises: any[];

  constructor( private servicio: ServiceService, private http: HttpClient) {
    
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(
      (data: any) => {
        this.paises = data;
        console.log(this.paises);
        
      }
    );
    
  }

  ngOnInit() {
  }

}
