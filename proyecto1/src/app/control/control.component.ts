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
  @Output() setAllAs: EventEmitter<boolean> = new EventEmitter<boolean>();

  public invertList(): void {
    this.invertListEvent.emit();
  }

  public onClickSetAll(): void {
    this.setAllAs.emit(true);
  }

  public onClickUnsetAll(): void {
    this.setAllAs.emit(false);
  }
}