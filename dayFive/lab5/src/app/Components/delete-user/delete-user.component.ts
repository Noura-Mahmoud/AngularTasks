import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: []
})
export default class DeleteUserComponent implements OnInit{
  ID: any;
  constructor(Activated:ActivatedRoute, private myService: UsersService, private router: Router){
    this.ID = Activated.snapshot.params["id"];
  }
  async ngOnInit(): Promise<void>  {
    await lastValueFrom(this.myService.DeleteUser(this.ID));
    this.router.navigateByUrl("/users");
  }

}
