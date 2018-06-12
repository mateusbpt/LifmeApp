import { Component, OnInit, Input } from '@angular/core';
import { ProfileModel } from '../../../shared/models/profile-model';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-info-navbar',
  templateUrl: './info-navbar.component.html',
  styleUrls: ['./info-navbar.component.scss']
})
export class InfoNavbarComponent implements OnInit {

  constructor(private userService: UserService) { 
    this.user = new ProfileModel();
  }

  public user: ProfileModel;
  public noLoading: boolean = false;

  ngOnInit() {
    this.userService.profile()
    .subscribe(response => {
      this.user = response;
      this.noLoading = true;
    });
  }

}
