import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../shared/models/login-model';
import { TokenService } from '../../shared/services/utils/token.service';
import { LoginService } from '../../shared/services/login/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private tokenService: TokenService, private loginService: LoginService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    if (this.loginService.isLogged()) {
      this.router.navigate(['']);
    }
    this.credentials = new LoginModel();
  }

  public credentials: LoginModel;

  public login() {
    this.loginService.login(this.credentials)
      .subscribe(response => {
        this.tokenService.saveToken(response);
        this.router.navigate(['']);
      }, error => this.toastrService.error('Usuário ou senha incorretos.', 'Lifme'));
  }

}
