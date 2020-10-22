import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imports : [MaterialModule];
  constructor() { }

  ngOnInit(): void {
  }

}
