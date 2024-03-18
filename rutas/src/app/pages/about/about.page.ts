import { Component } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.page.html',
  styleUrl: './about.page.css'
})
export class AboutPage {

  constructor(private tvShowsService: TvShowsService){}

  get contador(): number{
    return this.tvShowsService.contador;
  }

  public onClick(): void {
    this.tvShowsService.decrementa();
  }

}
