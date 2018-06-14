import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../../shared/models/profile-model';
import { UserService } from '../../shared/services/user/user.service';
import { FeedbackModel } from '../../shared/models/feedback-model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {


  constructor(private userService: UserService) {
    this.profile = new ProfileModel();
    this.feedback = new FeedbackModel();
  }

  public profile: ProfileModel;
  public feedback: FeedbackModel;
  public noLoading: boolean = false;

  ngOnInit() {
    this.userService.profile().subscribe(response => {
      this.profile = response;
      this.userService.feedback().subscribe(response => {
        this.feedback = response;
        this.noLoading = true;
      });
    });
  }

}
