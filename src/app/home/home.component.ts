import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imports : [MaterialModule];//importo mi clase material para usuar los componentes de angular material
  constructor() { }

  ngOnInit(): void {
  }

  
  onExit(): void {
  }
}
