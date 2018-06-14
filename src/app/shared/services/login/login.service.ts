import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../../settings/app-settings';
import { Observable } from 'rxjs/Observable';
import { LoginModel } from '../../models/login-model';
import { TokenService } from '../utils/token.service';
import { TokenModel } from '../../models/token-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private appSettings: AppSettings, private tokenService: TokenService, private router: Router) {}

  public login(userCredentials: LoginModel): Observable<TokenModel> {
      return this.http.post<TokenModel>(this.appSettings.authentication.login, userCredentials);
  }

  public logout(): void {
    this.tokenService.signOut();
  }

  public isLogged() : boolean {
    return this.tokenService.getToken() != null;
  } 

}
