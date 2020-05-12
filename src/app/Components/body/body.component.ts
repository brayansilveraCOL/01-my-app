import {Component} from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class bodyComponent {
  mostrar = true;
  frase: any={
    mensaje: "Hola Desde Frase",
    Autor: "Brayan Silvera"
};

  personajes: string[] = ['Spiderman', 'venon', 'otopus'];

}
