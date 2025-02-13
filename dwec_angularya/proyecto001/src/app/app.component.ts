import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';

  nombre = "Jesús";
  edad = 21;
  fumador = false;

  esFumador() {
    return this.fumador ? "Sí es fumador" : "No es fumador";
  }
}
