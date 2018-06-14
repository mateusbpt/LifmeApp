import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
import { ProfileModel } from '../../shared/models/profile-model';
import { SimpleUserModel } from '../../shared/models/simple-user-model';
import { UsersModel } from '../../shared/models/users-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private toastr: ToastrService) {
    this.profile = new ProfileModel();
    this.users = new Array<UsersModel>();
  }

  public profile: ProfileModel;
  public noLoading: boolean = false;
  public users: Array<UsersModel>;
  public filter: string;

  public invite(id) {
    this.userService.invite(id).subscribe(response => {
      this.toastr.success(response.message, 'Lifme');
      this.userService.profile().subscribe(response => {
        this.profile = response;
        this.userService.all().subscribe(response => {
          this.users = response.filter(x => !x.isFriend && !x.isInvite && !x.isPending && !x.isUser);
          this.noLoading = true;
        })
      });
    });
  }

  ngOnInit() {
    this.userService.profile().subscribe(response => {
      this.profile = response;
      this.userService.all().subscribe(response => {
        this.users = response.filter(x => !x.isFriend && !x.isInvite && !x.isPending && !x.isUser);
        this.noLoading = true;
      })
    });
  }

}
