import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './../API.service'; // Import your ProfileService here.
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: APIService ,// Inject the ProfileService
    private router: Router ,

  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      num: ['', Validators.required],
      password: ['', Validators.required],
      Kind: ['Patient', Validators.required], // Make sure this corresponds to the Kind field in your Django API.
      age: ['', Validators.required],
      gender: ['Male', Validators.required],
      score: 10 ,
      // position: 'nfsrjbr',
    });
  }
  onSubmit() {
    console.log('Submit button clicked');
    if (this.userForm.valid) {
      // Use the ProfileService to send data to your Django API
      this.profileService.createProfile(this.userForm.value).subscribe(
        (response) => {this.router.navigate(['/Me', this.userForm.value.num]);},
        (error) => {console.error('Error creating profile:', error);}
      );
    }
    else {
       console.log(this.userForm.errors);
    }
  }
}
