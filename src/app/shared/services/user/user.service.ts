import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/settings/app-settings';
import { Observable } from 'rxjs/Observable';
import { UsersModel } from '../../models/users-model';
import { ProfileModel } from '../../models/profile-model';
import { MessageModel } from '../../models/message-model';
import { FeedbackModel } from '../../models/feedback-model';
import { RegisterModel } from '../../models/register-model';
import { FriendsAndPendingsModel } from '../../models/friends-and-pendings-model';
import { UserUpdateModel } from '../../models/user-update-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private appSettings: AppSettings) { }

  public register(registerModel: RegisterModel): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.user.register, registerModel);
  }

  public edit(userUpdateModel: UserUpdateModel): Observable<MessageModel> {
    return this.http.put<MessageModel>(this.appSettings.user.edit, userUpdateModel);
  }

  public all(): Observable<Array<UsersModel>> {
    return this.http.get<Array<UsersModel>>(this.appSettings.user.all);
  }

  public profile(): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(this.appSettings.user.profile);
  }

  public invite(id: number): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.user.invite.replace('${id}', id.toString()), {});
  }

  public accept(id: number): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.user.accept.replace('${id}', id.toString()), {});
  }

  public reject(id: number): Observable<MessageModel> {
    return this.http.delete<MessageModel>(this.appSettings.user.reject.replace('${id}', id.toString()));
  }

  public feedback(): Observable<FeedbackModel> {
    return this.http.get<FeedbackModel>(this.appSettings.user.feedback);
  }

  public profileUser(id: number): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(this.appSettings.user.profileUser.replace('${id}', id.toString()));
  }

  public remove(id: number): Observable<MessageModel> {
    return this.http.delete<MessageModel>(this.appSettings.user.remove.replace('${id}', id.toString()));
  }

  public list(): Observable<FriendsAndPendingsModel> {
    return this.http.get<FriendsAndPendingsModel>(this.appSettings.user.list);
  }

}
