"use strict";
var router_1 = require('@angular/router');
var app_Home_1 = require('./app.Home');
var app_About_1 = require('./app.About');
var app_Detail_1 = require('./app.Detail');
var app_pagedefault_1 = require('./app.pagedefault');
var appRoutes = [
    { path: 'home', component: app_Home_1.HomeComponent },
    { path: 'about', component: app_About_1.AboutComponent },
    { path: 'food/:id', component: app_Detail_1.FoodDetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: app_pagedefault_1.PageDefault }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map