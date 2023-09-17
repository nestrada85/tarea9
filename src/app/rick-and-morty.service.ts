import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IPersonaje } from './Interfaces/IPersonaje'

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<IPersonaje[]> {
    return this.http.get<{ results: IPersonaje[] }>(this.apiUrl)
      .pipe(map(response => response.results));
  }
}
