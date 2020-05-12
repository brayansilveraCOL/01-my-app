import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  nombre: string;
  year: number;
  constructor() {
    this.year= new Date().getFullYear();
    this.nombre = "CokieTech.org";
  }

}
