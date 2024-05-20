import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { ContactPage } from './pages/contact/contact.page';
import { TvShowsPage } from './pages/tv-shows/tv-shows.page';
import { LoginPage } from './pages/login/login.page';
import { ErrorPage } from './pages/error/error.page';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    
    //{path: "**", component: ErrorPage}, //Cualquiera que no entre en las rutas anteriores automaticamente redirige a error
    
    {path: "home", component: HomePage},
    {path: "about", component: AboutPage},
    {path: "contact", component: ContactPage},
    {path: "tvshow", component: TvShowsPage},
    {path: "login", component: LoginPage},
    {path: "error", component: ErrorPage},
    {path: "**", redirectTo: "error", pathMatch: "full"}, //Lo mismo que lo anterior pero mejor
];
