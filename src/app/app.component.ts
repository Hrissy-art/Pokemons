import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  // // title = 'Kata';
  // // pokemonList: any[] = [];

  // // constructor(private pokemonService: PokemonService) {}

  // // ngOnInit() {
  // //   this.pokemonService.getPokemons().subscribe((pokemons: any) => {
  // //     this.pokemonList = pokemons.results;
       
  // //   });
  // }
}