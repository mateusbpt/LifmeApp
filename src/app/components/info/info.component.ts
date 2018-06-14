import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login/login.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  public logout() {
    this.loginService.logout();
  }

  ngOnInit() {
  }

}
