import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personas: any;
  constructor(private personaService: PersonasService) {
    this.personas = [];
  }

  ngOnInit() {
    this.personaService.p.subscribe(data => {
      this.personas = data;
    });
  }
}
