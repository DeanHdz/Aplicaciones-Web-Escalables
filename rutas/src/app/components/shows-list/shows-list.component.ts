import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { ShowComponent } from '../show/show.component';

import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-shows-list',
  standalone: true,
  imports: [NgFor, NgIf, ShowComponent],
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.css'
})
export class ShowsListComponent {

  //Añadir el servicio en el constuctor
  constructor(private tvShowsService : TvShowsService ) { 
  }

  @Input()
  public tvShows : Show[] = []; //Por defecto esta vacio

  removeShow(showId: number): void {
    this.tvShowsService.removeShow(showId);
  }

  invertList(): void {
    this.tvShows = this.tvShows.reverse();
  }
}
