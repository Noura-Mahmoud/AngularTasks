import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  formValidation = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    age: new FormControl(0,[Validators.required, Validators.min(20), Validators.max(40)]),
    email: new FormControl("",[Validators.required, Validators.email])
  })
  get NameValid(){
    return this.formValidation.controls["name"].valid;
  }
  get AgeValid(){
    return this.formValidation.controls["age"].valid;
  }
  get EmailValid(){
    return this.formValidation.controls["email"].valid;
  }
  submitForm(){
    if(this.formValidation.valid)
    {
      alert("Success!");
    }
    else{
      alert("Check ur data again!!")
    }
  }
}
