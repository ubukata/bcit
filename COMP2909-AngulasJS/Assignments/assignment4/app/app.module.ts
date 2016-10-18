import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { PageDefault }    from './app.pagedefault';
import { HomeComponent } from './app.Home';
import { AboutComponent } from './app.About';
import { FoodDetailComponent } from './app.Detail';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ AppComponent, PageDefault, 
                    HomeComponent, AboutComponent, FoodDetailComponent ],
    providers:    [ appRoutingProviders ],  
    bootstrap:    [ AppComponent ],
})
export class AppModule { }
