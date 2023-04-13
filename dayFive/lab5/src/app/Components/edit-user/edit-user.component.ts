import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent {
  ID:any;
  user:any;
  constructor(Activated:ActivatedRoute, private myService: UsersService,private router: Router){
    this.ID = Activated.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.getUserById(this.ID).subscribe(
      {
        next:(data)=>{
          this.user = data;
        },
        error:(err)=>{console.log(err);
        }
      }
    );
  }

  async Update(name:any, age:any, email:any, phone:any, Courses:string){
    let courses = Courses.split(",");
    let newUser = {name, age, email, phone, courses};
    await lastValueFrom( this.myService.UpdateUser(this.ID,newUser));
    this.router.navigateByUrl("");
  }
  // async Update(name:any, age:any, email:any, phone:any, Courses:string){
  //   let courses = Courses.split(",");
  //   let newUser = {name, age, email, phone, courses};
  //   await this.myService.UpdateUser(this.ID,newUser).subscribe();
  //   this.router.navigateByUrl("");
  // }
}
