import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  ID: any;
  user: any;
  constructor(Activated:ActivatedRoute, private myService: UsersService){
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
}
