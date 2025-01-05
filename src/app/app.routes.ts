import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CategoryComponent } from './category/category.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    {path: '', title: 'Home', component: HeroesComponent},
    {path: 'about', title:'About', component: AboutComponent},
    {path: 'category', title:'Category', component: CategoryComponent},
    {path: 'discovery', title:'Discovery', component: DiscoveryComponent},
    {path: 'detail', title:'Detail', component: DetailComponent}
];
