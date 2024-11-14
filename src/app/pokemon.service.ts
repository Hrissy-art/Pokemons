import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from './models/pokemon.model';
import { Data, PokemonTcgApiResponse } from './models/pokemon-tcg.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  // constructor(private http: HttpClient) { }

  // getPokemons(limit: number = 10): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}?limit=${limit}`);
  // }


  private readonly _BASE_API_URL: string = "https://api.pokemontcg.io/v2/";
  private http = inject(HttpClient);

  getAllCards$(): Observable<Data[]> {
    return this.http.get<PokemonTcgApiResponse>(this._BASE_API_URL + "cards") // "https://api.pokemontcg.io/v2/cards"
      .pipe(
        map((response: PokemonTcgApiResponse) => response.data)
      ); 
  }
  }
  



