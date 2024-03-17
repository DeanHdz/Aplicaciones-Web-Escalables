import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
  @Output() invertListEvent: EventEmitter<void> = new EventEmitter<void>();

  invertList(): void {
    this.invertListEvent.emit();
  }

  public setAllAs( value : boolean) : void{
    //Desde el control, no se tiene como hijo a los shows, por lo que se debe emitir un evento para que el padre lo maneje. Se ve en la siguiente clase
    //this.tvShows.forEach(item => item.isSelected = value);
  }
}