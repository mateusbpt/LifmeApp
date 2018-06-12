import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/settings/app-settings';
import { HttpClient } from '@angular/common/http';
import { SimplePostModel } from '../../models/simple-post-model';
import { Observable } from 'rxjs/Observable';
import { PostModel } from '../../models/post-model';
import { MessageModel } from '../../models/message-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private appSettings: AppSettings) { }

  public friends(): Observable<Array<SimplePostModel>> {
    return this.http.get<Array<SimplePostModel>>(this.appSettings.post.friends);
  }

  public add(postModel: PostModel): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.post.add, postModel);
  }

  public remove(id: number): Observable<MessageModel> {
    return this.http.delete<MessageModel>(this.appSettings.post.remove.replace('${id}', id.toString()));
  }

  public postUser(id: number): Observable<Array<SimplePostModel>> {
    return this.http.get<Array<SimplePostModel>>(this.appSettings.post.postUser.replace('${id}', id.toString()));
  }

  public like(id: number): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.post.like.replace('${id}', id.toString()), {});
  }

}
