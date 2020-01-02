import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentInteractionService } from 'src/app/service/component-interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private _router: Router,
    private _componentIntractionService: ComponentInteractionService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      "EmailId": new FormControl('', Validators.required),
      "Password": new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.checkLoginCredential(this.loginForm)) {
        this._componentIntractionService.isAuthenticated = true;
        this._router.navigate(['author']);
      }
      else this._router.navigate(['']);
    }
  }

  checkLoginCredential(loginForm: FormGroup) {
    let status = (loginForm.controls["EmailId"].value == 'vicky786gupta@gmail.com' &&
      loginForm.controls["Password"].value == '1234') ? true : false;
    return status;
  }

}
