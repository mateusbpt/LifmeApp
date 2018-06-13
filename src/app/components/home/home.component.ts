import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/services/user/user.service';
import { ProfileModel } from '../../shared/models/profile-model';
import { PostService } from '../../shared/services/post/post.service';
import { SimplePostModel } from '../../shared/models/simple-post-model';
import { PostModel } from '../../shared/models/post-model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal, private userService: UserService, private postService: PostService, private toastr: ToastrService) {
    this.profile = new ProfileModel();
    this.posts = new Array<SimplePostModel>();
    this.post = new PostModel;
  }

  public profile: ProfileModel;
  public posts: Array<SimplePostModel>;
  public post: PostModel;
  public noLoading: boolean = false;


  private getProfile(): void {
    this.userService.profile().subscribe(response => {
      this.profile = response;
    });
  }

  public getFriendPosts(): void {
    this.postService.friends().subscribe(response => {
      this.posts = response;
    });
  }

  public addPost() {
    this.postService.add(this.post).subscribe(response => {
      this.toastr.success(response.message, 'Lifme');
      this.post = new PostModel();
    });
  }

  public reject(id) {
    this.userService.reject(id).subscribe(response => {
      this.toastr.success(response.message, 'Lifme');
      this.getProfile();
      this.getFriendPosts();
    });
  }

  public accept(id) {
    this.userService.accept(id).subscribe(response => {
      this.toastr.success(response.message, 'Lifme');
      this.getProfile();
      this.getFriendPosts();
    });
  }

  public like(id) {
    this.postService.like(id).subscribe(response => {
      this.getFriendPosts();
    });
  }

  public verifyLike(post: SimplePostModel): boolean {
    return post.likes.some(x => x.id === this.profile.id);
  }

  ngOnInit() {
    this.userService.profile().subscribe(response => {
      this.profile = response;
      this.postService.friends().subscribe(response => {
        this.posts = response;
        this.noLoading = true;
      });
    });
  }
}
