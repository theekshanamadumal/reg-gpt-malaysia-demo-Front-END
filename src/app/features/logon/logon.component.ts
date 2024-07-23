import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/core/models/user.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { saveUser } from 'src/app/shared/helpers/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss']
})
export class LogonComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  submitButtonDisabled: boolean = false; 
  maxPasswordLength = 15;

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthenticationService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(15)]]
    })
  }
  login() {
    // Navigate to the home page
    this.router.navigate(['/home']); // Replace 'home' with the actual route path for your home page
  }

  get f() { return this.loginForm.controls; }
  
  onSubmit() {
    this.submitButtonDisabled = true;
    this.submitted = true;
    this.router.navigate(['/home'])

    if (this.loginForm.invalid) {
      this.submitButtonDisabled = false;
      return;
    }

    this.authService.logOn(this.f.username.value, this.f.password.value).subscribe(
      response => {
          this.submitButtonDisabled = false;
          const userModel: UserModel = response;
          saveUser(userModel);
          this.router.navigate(['/home']);
      },
      error => {
          this.submitButtonDisabled = false;
          this.toastr.error(error.error.message);
      }
    );
  }

}
