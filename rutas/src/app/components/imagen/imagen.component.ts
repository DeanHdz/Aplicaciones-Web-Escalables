import { Component } from '@angular/core';

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [],
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.css'
})
export class ImagenComponent {
  public imgSrc : string = "https://picsum.photos/200/300";
  public imgAlt : string = "Imagen de prueba";
}
