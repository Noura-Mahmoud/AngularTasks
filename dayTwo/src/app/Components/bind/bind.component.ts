import { Component } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent {
  data = "";
  clear(){
    this.data = "";
  }
}
