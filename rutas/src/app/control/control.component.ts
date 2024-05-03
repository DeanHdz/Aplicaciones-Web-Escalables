import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TvShowsService } from '../services/tv-shows.service';
import { Show } from '../interfaces/show.interface';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {

  constructor(private tvShowsService : TvShowsService ) { 
  }

  @Output() invertListEvent: EventEmitter<void> = new EventEmitter<void>();

  //Utilizamos el nuevo import de FormsModule para poder utilizar ngModel y vincular el valor del input Text con la variable searchTerm
  public searchTerm: string = '';

  //Create Form
  public create_id: string = '';
  public create_title: string = '';
  public create_year: string = '';
  public create_episodes: string = '';
  public create_image: string = '';

  //Modify Form
  public modify_id: string = '';
  public modify_title: string = '';
  public modify_year: string = '';
  public modify_episodes: string = '';
  public modify_image: string = '';

  public invertList(): void {
    this.invertListEvent.emit();
  }

  public onClickSetAll(): void {
    this.tvShowsService.setAllAs(true);
  }

  public onClickUnsetAll(): void {
    this.tvShowsService.setAllAs(false);
  }

  public onClickSearch(): void {
    this.tvShowsService.searchByTerm(this.searchTerm);
  }

  public onClickCreateShow(): void {

    this.tvShowsService.addShow({
      id: parseInt(this.create_id),
      title: this.create_title,
      year: parseInt(this.create_year),
      episodes: parseInt(this.create_episodes),
      image: this.create_image
    });
  }

  public onClickModifyShow(): void {
    this.tvShowsService.modifyShow({
      id: parseInt(this.modify_id),
      title: this.modify_title,
      year: parseInt(this.modify_year),
      episodes: parseInt(this.modify_episodes),
      image: this.modify_image
    });
  }

}