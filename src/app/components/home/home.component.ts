import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/services/user/user.service';
import { ProfileModel } from '../../shared/models/profile-model';
import { PostService } from '../../shared/services/post/post.service';
import { SimplePostModel } from '../../shared/models/simple-post-model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal, private userService: UserService,
    private postService: PostService) {
    this.profile = new ProfileModel();
    this.posts = new Array<SimplePostModel>();
  }

  private closeResult: string;

  public profile: ProfileModel;
  public posts: Array<SimplePostModel>;
  public cardLength: number = 1;
  public noLoading: boolean = false;

  open(content) {
    this.modalService.open(content, { centered: true, size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

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
