import { Component } from '@angular/core';
import { MaterialModule } from './material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imports : [MaterialModule];//importo mi clase material para usuar los componentes de angular material
}
