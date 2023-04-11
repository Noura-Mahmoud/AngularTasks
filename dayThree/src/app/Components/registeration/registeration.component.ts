import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  name = "";
  age = "";
  AddStd(e:any){
    if(+this.age >20 && +this.age<40){
      this.fireAddStd();
      this.name="";
      this.age="";
    }
  }
  @Output("AddStdEvent") addStd = new EventEmitter(); 
  fireAddStd(){
    this.addStd.emit({name: this.name, age: this.age});
  }
}
