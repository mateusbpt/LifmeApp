import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../../settings/app-settings';
import { Observable } from 'rxjs/Observable';
import { ChallengeModel } from '../../models/challenge-model';
import { CompleteChallengeModel } from '../../models/complete-challenge-model';
import { MessageModel } from '../../models/message-model';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http: HttpClient, private appSettings: AppSettings) { }

  public profile(): Observable<ChallengeModel> {
    return this.http.get<ChallengeModel>(this.appSettings.challenge.profile);
  }

  public accept(id: number): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.challenge.accept.replace('${id}', id.toString()), {});
  }

  public reject(id: number): Observable<MessageModel> {
    return this.http.delete<MessageModel>(this.appSettings.challenge.reject.replace('${id}', id.toString()));
  }

  public finalize(id: number, completeChallengeModel: CompleteChallengeModel): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.challenge.finalize.replace('${id}', id.toString()), completeChallengeModel);
  }

}
