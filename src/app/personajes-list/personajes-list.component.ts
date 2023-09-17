import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';
import { IPersonaje } from '../Interfaces/IPersonaje';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css'],
})
export class PersonajesListComponent implements OnInit {
  personajes: IPersonaje[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getPersonajes().subscribe((data) => {
      this.personajes = data;
    });
  }
}
