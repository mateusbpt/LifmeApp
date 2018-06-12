import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../../shared/models/profile-model';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  constructor(private userService: UserService) { 
    this.user = new ProfileModel();
  }

  public active: boolean = false;
  public noLoading: boolean = false;
  public user: ProfileModel;

  public ativar() {
    this.active = true;
  }

  ngOnInit() {
    this.userService.profile().subscribe(response => {
      this.user = response;
      this.noLoading = true;
    });
  }

}
