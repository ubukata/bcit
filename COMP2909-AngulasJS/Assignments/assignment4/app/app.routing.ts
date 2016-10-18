import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { HomeComponent }         from './app.Home';
import { AboutComponent }        from './app.About';
import { FoodDetailComponent }   from './app.Detail';
import { PageDefault }           from './app.pagedefault';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'food/:id', component: FoodDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageDefault }
];

export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
