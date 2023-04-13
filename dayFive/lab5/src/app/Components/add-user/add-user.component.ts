import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent {
  constructor(private myService: UsersService,private router:Router){}
  async Add(name:any, age:any, email:any, phone:any, Courses:string){
    let courses = Courses.split(",");
    let newUser = {name, age, email, phone, courses};
    await lastValueFrom(this.myService.AddNewUder(newUser));
    this.router.navigateByUrl("/users");
  }
  // async Add(name:any, age:any, email:any, phone:any, Courses:string){
  //   let courses = Courses.split(",");
  //   let newUser = {name, age, email, phone, courses};
  //   await this.myService.AddNewUder(newUser).subscribe();
  //   this.router.navigateByUrl("/users");
  // }
}
