import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  cantidadPersonas: any;
  constructor(private personaService: PersonasService) {
    this.cantidadPersonas = 0;
  }

  ngOnInit() {
    this.personaService.p.subscribe(data => {
      if (data) {
        this.cantidadPersonas = data.length;
      }
    });
  }

  eliminarUltimo() {
    this.personaService.removePerson();
  }

  generateData() {
    this.personaService.generateData();
  }
}
