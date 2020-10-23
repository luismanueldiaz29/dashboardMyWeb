import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  showSpinner = false;
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);
  }

}
