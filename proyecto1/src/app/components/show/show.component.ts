import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [NgIf],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  @Input()
  public tvShow : Show = {
    episodes: 0,
    id: 0,
    image: '',
    title: '',
    year: 0
  };

  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  removeCard(): void {
    this.remove.emit(this.tvShow.id);
  }
}
