import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from './models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  // constructor(private http: HttpClient) { }

  // getPokemons(limit: number = 10): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}?limit=${limit}`);
  // }


  private apiUrl = 'https://api.pokemontcg.io/v2/cards';
  private http = inject(HttpClient);

  getAll(): Observable<Pokemon[]> {
    return this.http.get<{ data: Pokemon[] }>(this.apiUrl).pipe(
      map(response => response.data) 
    );
  }
  // getAll(): Observable<Pokemon[]> {
  //   return this.http.get<Pokemon[]>(this.apiUrl);
  // }

    getPokemonsById(id: number): Observable<Pokemon> {

      return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
    }
  
   
  }
  



