import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

export const routes: Routes = [
    {path: '', component: HeroesComponent},
    {path: 'about', component: AboutComponent}
];
