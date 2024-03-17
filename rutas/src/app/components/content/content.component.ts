import { Component } from '@angular/core';
import { ContadorComponent } from '../contador/contador.component';
import { ImagenComponent } from '../imagen/imagen.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContadorComponent, ImagenComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
