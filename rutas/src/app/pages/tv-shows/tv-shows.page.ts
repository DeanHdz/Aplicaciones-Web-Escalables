import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from '../../components/contador/contador.component';
import { ImagenComponent } from '../../components/imagen/imagen.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContentComponent } from '../../components/content/content.component';
import { ShowsListComponent } from '../../components/shows-list/shows-list.component';
import { ControlComponent } from '../../control/control.component';

import { Show } from '../../interfaces/show.interface';
import { ShowComponent } from '../../components/show/show.component';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [ContadorComponent, ImagenComponent, HeaderComponent, FooterComponent, ContentComponent, ShowsListComponent, ShowComponent, ControlComponent],
  templateUrl: './tv-shows.page.html',
  styleUrl: './tv-shows.page.css'
})
export class TvShowsPage {

  constructor(private tvShowsService : TvShowsService ) { 
    this.tvShowsService.fetchTvShows();
    this.showsListComponent = new ShowsListComponent(tvShowsService);
  }

  public titulo: string = "Mi nueva aplicacion de angular";

  @ViewChild('showsList') showsListComponent: ShowsListComponent;

  executeInvertList(): void {
    this.showsListComponent.invertList();
  }

  public setAllAs(value: boolean): void {
    this.tvShowsService.setAllAs(value);
  }

  public searchByTerm(value: string): void {
    this.tvShowsService.searchByTerm(value);
  }

  public get tvShows() : Show[]{
    return this.tvShowsService.tvShows;
  }
}
