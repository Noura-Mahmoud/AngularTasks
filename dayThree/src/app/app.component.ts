import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dayThree';
  Students:{name: string, age:string}[]=[];
  dataFromRegister:any;
  dataFromParent = {name:"hamada", age:"30"};
  pushNewStd(data:any){
    this.Students.push(data);
    this.dataFromRegister = this.Students;
  }
}
