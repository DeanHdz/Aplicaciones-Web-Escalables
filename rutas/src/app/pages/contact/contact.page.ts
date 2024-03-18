import { Component } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css'
})
export class ContactPage {

  constructor(private tvShowsService: TvShowsService){}

  get contador(): number{
    return this.tvShowsService.contador;
  }

  public onClick(): void {
    this.tvShowsService.incrementa();
  }

}
