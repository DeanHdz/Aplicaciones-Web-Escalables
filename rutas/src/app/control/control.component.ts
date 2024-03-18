import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TvShowsService } from '../services/tv-shows.service';

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
}