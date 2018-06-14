import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../../shared/models/profile-model';
import { UserService } from '../../shared/services/user/user.service';
import { CompleteChallengeModel } from '../../shared/models/complete-challenge-model';
import { ChallengeService } from '../../shared/services/challenge/challenge.service';
import { ToastrService } from 'ngx-toastr';
import { ChallengeModel } from '../../shared/models/challenge-model';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  constructor(private userService: UserService, private challengeService: ChallengeService,
    private toastr: ToastrService) {
    this.profile = new ProfileModel();
    this.challengeFinalize = new CompleteChallengeModel();
    this.challengeProfile = new ChallengeModel();
  }

  public active: boolean = false;
  public noLoading: boolean = false;
  public profile: ProfileModel;
  public challengeProfile: ChallengeModel;
  public challengeFinalize: CompleteChallengeModel;

  public ativar() {
    this.active = true;
  }

  public accept(id: number) {
    this.challengeService.accept(id).subscribe(response => {
      this.toastr.success(response.message, 'Lifme');
      this.userService.profile().subscribe(response => {
        this.profile = response;
        this.challengeService.profile().subscribe(response => {
          this.challengeProfile = response;
          this.noLoading = true;
        });
      });
    });
  }

  public reject(id: number) {
    this.challengeService.reject(id).subscribe(response => {
      this.toastr.success(response.message, 'Lifme');
      this.userService.profile().subscribe(response => {
        this.profile = response;
        this.challengeService.profile().subscribe(response => {
          this.challengeProfile = response;
          this.noLoading = true;
        });
      });
    });
  }

  public finalize(id: number) {
    this.challengeService.finalize(id, this.challengeFinalize).subscribe(response => {
      this.toastr.success(response.message, 'Lifme');
      this.userService.profile().subscribe(response => {
        this.profile = response;
        this.challengeService.profile().subscribe(response => {
          this.challengeProfile = response;
          this.noLoading = true;
        });
      });
    });
  }

  ngOnInit() {
    this.userService.profile().subscribe(response => {
      this.profile = response;
      this.challengeService.profile().subscribe(response => {
        this.challengeProfile = response;
        this.noLoading = true;
      });
    });
  }

}
