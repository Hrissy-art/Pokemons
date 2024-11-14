import { Routes } from '@angular/router';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';

export const routes: Routes = [ 
    { path: '', redirectTo: '/pokemon-cards', pathMatch: 'full' },
    { path: 'pokemon-cards', component: PokemonCardsComponent }];
