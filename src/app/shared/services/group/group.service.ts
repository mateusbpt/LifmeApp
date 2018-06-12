import { Injectable } from '@angular/core';
import { AppSettings } from '../../../settings/app-settings';
import { HttpClient } from '@angular/common/http';
import { GroupProfileModel } from '../../models/group-profile-model';
import { Observable } from 'rxjs/Observable';
import { GroupAddModel } from '../../models/group-add-model';
import { MessageModel } from '../../models/message-model';
import { SimpleGroupModel } from '../../models/simple-group-model';
import { TournamentAddModel } from '../../models/tournament-add-model';
import { TournamentWinnerModel } from '../../models/tournament-winner-model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient, private appSettings: AppSettings) { }

  public profile(id: number): Observable<GroupProfileModel> {
    return this.http.get<GroupProfileModel>(this.appSettings.group.profile.replace('${id}', id.toString()));
  }

  public add(groupAddModel: GroupAddModel): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.group.add, groupAddModel);
  }

  public addUser(id: number, idUser: number): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.group.userAdd.replace('${id}', id.toString()).replace('${idUser}', idUser.toString()), {});
  }

  public out(id: number): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.group.out.replace('${id}', id.toString()), {});
  }

  public all(): Observable<Array<SimpleGroupModel>> {
    return this.http.get<Array<SimpleGroupModel>>(this.appSettings.group.all);
  }

  public addTournament(id: number, tournamentAddModel: TournamentAddModel): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.group.addTournament.replace('${id}', id.toString()), tournamentAddModel);
  }

  public removeTournament(id: number, idTournament: number): Observable<MessageModel> {
    return this.http.delete<MessageModel>(this.appSettings.group.removeTournament.replace('${id}', id.toString()).replace('${idTournament}', idTournament.toString()));
  }

  public winnerTournament(id: number, idTournament: number, tournamentWinnerModel: TournamentWinnerModel): Observable<MessageModel> {
    return this.http.post<MessageModel>(this.appSettings.group.winnerTournament.replace('${id}', id.toString()).replace('${idTournament}', idTournament.toString()), tournamentWinnerModel);
  }

}
