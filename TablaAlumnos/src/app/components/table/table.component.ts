import { Component } from '@angular/core';


export interface Alumno{
  nAlumno : number;
  nombre : string;
  apellidos: string;
  dni: string;
  edad: number;
  curso: string;
}

const ELEMENT_DATA : Alumno[] = [
  {nAlumno : 1, nombre : 'Pedro', apellidos: 'Sanchez del Bot', dni: '24543321A', edad: 20, curso: '2DAM'},
  {nAlumno : 2, nombre : 'Benjamin', apellidos: 'el pescado', dni: '11111111A', edad: 2032, curso: '1Pescaderia'},
  {nAlumno : 3, nombre : 'Paco', apellidos: 'Franco Bahamonde', dni: '00000001A', edad: 132, curso: '1AYF'},
  {nAlumno : 4, nombre : 'Adolfo', apellidos: 'Hitler', dni: '00000001N', edad: 135, curso: '1Arte'},
  {nAlumno : 5, nombre : 'Manolo', apellidos: 'Gutierrez Gonzalez', dni: '42543561Z', edad: 18, curso: '1DAM'},
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']  // Cambia styleUrl a styleUrls
})
export class TableComponent {
  displayedColumns: string[] = ['nAlumno', 'nombre', 'apellidos', 'dni', 'edad', 'curso'];
  listaAlumnos = ELEMENT_DATA;
}
