import { Component, inject, OnInit, TrackByFunction } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-cards',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './pokemon-cards.component.html',
  styleUrl: './pokemon-cards.component.scss'
})
export class PokemonCardsComponent {
  // ngOnInit(): void {}
  // private route: ActivatedRoute = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);
  // pokemonId!: number;
  pokemonCards$: Observable<Pokemon[]> = this.pokemonService.getAll();
  
}
