import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  constructor(private myService: UsersService, private router: Router){
    console.log(myService.getAllUsers());
  }
  users:any;

  // async deleteUser(id:any){
  //   await this.myService.DeleteUser(id);
  //   this.router.navigateByUrl("/users");
  // }

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      {
        next:(data)=>{
          this.users = data;
        },
        error:(err)=>{console.log(err);
        }
      }
    );
  }
}
