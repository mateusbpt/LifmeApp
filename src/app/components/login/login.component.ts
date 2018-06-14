import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../shared/models/login-model';
import { TokenService } from '../../shared/services/utils/token.service';
import { LoginService } from '../../shared/services/login/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from '../../shared/models/register-model';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private tokenService: TokenService, private loginService: LoginService, private userService: UserService, private router: Router, private toastrService: ToastrService) {
      this.credentials = new LoginModel();
      this.registerData = new RegisterModel();
  }

  ngOnInit() {
    if (this.loginService.isLogged()) {
      this.router.navigate(['']);
    }
  }

  public credentials: LoginModel;
  public registerData: RegisterModel;

  public avatars: Array<string> = [
    '/assets/avatar/avatar1.png',
    '/assets/avatar/avatar2.png',
    '/assets/avatar/avatar3.png',
    '/assets/avatar/avatar4.png',
    '/assets/avatar/avatar5.png',
    '/assets/avatar/avatar6.png',
    '/assets/avatar/avatar7.png',
    '/assets/avatar/avatar8.png',
    '/assets/avatar/avatar9.png'
  ];

  public login() {
    this.loginService.login(this.credentials)
      .subscribe(response => {
        this.tokenService.saveToken(response);
        this.router.navigate(['']);
      }, error => this.toastrService.error('Usuário ou senha incorretos.', 'Lifme'));
  }

  public register() {
    this.userService.register(this.registerData)
      .subscribe(response => {
        this.toastrService.success(response.message, 'Lifme');
        this.registerData = new RegisterModel();
      }, error => {
        console.log(error)
        this.toastrService.error(error.error.message, 'Lifme');
      });
  }

}
