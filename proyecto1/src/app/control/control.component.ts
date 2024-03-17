import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
  @Output() invertListEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() setAllAs: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  //Utilizamos el nuevo import de FormsModule para poder utilizar ngModel y vincular el valor del input Text con la variable searchTerm
  public searchTerm: string = '';

  public invertList(): void {
    this.invertListEvent.emit();
  }

  public onClickSetAll(): void {
    this.setAllAs.emit(true);
  }

  public onClickUnsetAll(): void {
    this.setAllAs.emit(false);
  }

  public onClickSearch(): void {
    this.onSearch.emit(this.searchTerm);
  }
}