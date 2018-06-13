import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../shared/models/register-model';
import { UserService } from '../../shared/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private toastrService: ToastrService, private router: Router) {
    this.registerData = new RegisterModel();
  }

  public registerData: RegisterModel;

  public avatars: Array<string> = [
    '/assets/avatar/avatar1.png',
    '/assets/avatar/avatar2.png',
    '/assets/avatar/avatar3.png',
    '/assets/avatar/avatar4.png',
    '/assets/avatar/avatar5.png',
    '/assets/avatar/avatar6.png',
    '/assets/avatar/avatar7.png',
    '/assets/avatar/avatar8.png',
    '/assets/avatar/avatar9.png'
  ];

  

  public register() {
    this.userService.register(this.registerData)
      .subscribe(response => {
        this.toastrService.success(response.message, 'Lifme');
        this.router.navigate(['login']);
      }, error => {
        console.log(error)
        this.toastrService.error(error.error.message, 'Lifme');
      });
  }

  ngOnInit() {
  }

}
