import { Component, inject, OnInit, TrackByFunction } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Data } from '../models/pokemon-tcg.interface';

@Component({
  selector: 'app-pokemon-cards',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './pokemon-cards.component.html',
  styleUrl: './pokemon-cards.component.scss'
})
export class PokemonCardsComponent {
 
  private _pokemonTcgApiService: PokemonService = inject(PokemonService);
  cards$: Observable<Data[]> = this._pokemonTcgApiService.getAllCards$();
  
}
