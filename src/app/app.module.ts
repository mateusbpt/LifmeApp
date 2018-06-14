import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgPipesModule } from 'ngx-pipes';
import { ToastrModule } from 'ngx-toastr';

import { ProfileComponent } from './components/profile/profile.component';
import { InfoNavbarComponent } from './components/navbars/info-navbar/info-navbar.component';
import { NavbarComponent } from './components/navbars/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { GroupComponent } from './components/group/group.component';
import { FriendsComponent } from './components/friends/friends.component';
import { GroupsComponent } from './components/groups/groups.component';
import { LoginComponent } from './components/login/login.component';


import { ChallengeService } from './shared/services/challenge/challenge.service';
import { GroupService } from './shared/services/group/group.service';
import { LoginService } from './shared/services/login/login.service';
import { PostService } from './shared/services/post/post.service';
import { UserService } from './shared/services/user/user.service';
import { TokenService } from './shared/services/utils/token.service';
import { Interceptor } from './settings/interceptor';
import { AppSettings } from './settings/app-settings';
import { HomeComponent } from './components/home/home.component';

const InterceptorConfig = {
  provide: HTTP_INTERCEPTORS,
  useClass: Interceptor,
  multi: true,
 }

 const ToastrConfig = {
  preventDuplicates: true,
  closeButton: true
};

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    InfoNavbarComponent,
    UsersComponent,
    ChallengesComponent,
    FeedbackComponent,
    GroupComponent,
    FriendsComponent,
    GroupsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgHttpLoaderModule,
    NgPipesModule,
    ToastrModule.forRoot(ToastrConfig),
    NgbModule.forRoot()
  ],
  providers: [
    ChallengeService,
    GroupService,
    LoginService,
    PostService,
    UserService,
    TokenService,
    InterceptorConfig,
    AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
