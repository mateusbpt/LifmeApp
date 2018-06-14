import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModel } from '../../shared/models/profile-model';
import { SimplePostModel } from '../../shared/models/simple-post-model';
import { UserService } from '../../shared/services/user/user.service';
import { PostService } from '../../shared/services/post/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private postService: PostService, private route: Router,
    private activateRoute: ActivatedRoute) {
    this.user = new ProfileModel();
    this.profile = new ProfileModel();
    this.posts = new Array<SimplePostModel>();
  }

  public user: ProfileModel;
  public profile: ProfileModel;
  public posts: Array<SimplePostModel>;
  public noLoading: boolean = false;

  public like(id) {
    this.postService.like(id).subscribe(response => {
      this.postService.postUser(id).subscribe(response => {
        this.posts = response;
      });
    });
  }

  public verifyLike(post: SimplePostModel): boolean {
    return post.likes.some(x => x.id === this.user.id);
  }

  ngOnInit() {
    const id = this.activateRoute.snapshot.params['id'];
    this.userService.profile().subscribe(response => {
      this.user = response;
      this.userService.profileUser(id).subscribe(response => {
        this.profile = response;
        this.postService.postUser(id).subscribe(response => {
          this.posts = response;
          this.noLoading = true;
        });
      });
    });
  }

}
