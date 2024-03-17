import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { ContactPage } from './pages/contact/contact.page';
import { TvShowsPage } from './pages/tv-shows/tv-shows.page';

export const routes: Routes = [
    {path: "home", component: HomePage},
    {path: "about", component: AboutPage},
    {path: "contact", component: ContactPage},
    {path: "tvshow", component: TvShowsPage},
];
