import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './../API.service'; // Import your ProfileService here.
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: APIService,
    private router: Router ,

  ) {
    this.userForm = this.fb.group({
      password: ['', Validators.required],
      num: ['', Validators.required]

     });
  }
  onSubmit() {
    console.log("this.userForm \n " , this.userForm.value );
    if (this.userForm.valid)
      this.profileService.login(this.userForm.value).subscribe(
        (response) => { this.router.navigate(['/Me', this.userForm.value.num]);},
        (error)    => { console.error('Error creating profile:', error)       ;}
      );

    else
      console.error(this.userForm.errors);

  }
}
