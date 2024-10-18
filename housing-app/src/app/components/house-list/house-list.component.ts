import { Component } from '@angular/core';
import { House } from '../../interfaces/house.interfaces';
import { HouseService } from '../../services/house-service.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css'
})
export class HouseListComponent {
  listadoCasas: House[] = [];

  constructor(private houseService: HouseService){}

  ngOnInit(): void{
    this.houseService.getHouseList().subscribe(respuesta => {
      this.listadoCasas = respuesta;
    });
  }

}
