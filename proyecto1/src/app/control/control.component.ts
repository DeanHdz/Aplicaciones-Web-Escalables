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
}