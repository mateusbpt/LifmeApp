import { environment } from "../../environments/environment";

export class AppSettings {
    private apiUrl: string = environment.apiUrl;

    public authentication = {
        login: this.apiUrl + '/login'
    };

    public user = {
        all: this.apiUrl + '/user/all',
        edit: this.apiUrl + '/user/edit',
        invite: this.apiUrl + '/user/invite/${id}',
        accept: this.apiUrl + '/user/invite/${id}/accept',
        reject: this.apiUrl + '/user/invite/${id}/reject',
        profile: this.apiUrl + '/user/profile',
        profileUser: this.apiUrl + '/user/profile/${id}',
        feedback: this.apiUrl + '/user/feedback',
        list: this.apiUrl + '/user/plist',
        remove: this.apiUrl + '/user/friends/${id}/remove',
        register: this.apiUrl + '/user/register'
    };

    public post = {
        add: this.apiUrl + '/post/add',
        remove: this.apiUrl + '/post/remove/${id}',
        friends: this.apiUrl + '/post/friends',
        postUser: this.apiUrl + '/post/user/${id}',
        like: this.apiUrl + '/post/${id}/like'
    };

    public group = {
        profile: this.apiUrl + '/group/${id}/profile',
        add: this.apiUrl + '/group/add',
        userAdd: this.apiUrl + '/group/${id}/user/add/${idUser}',
        out: this.apiUrl + '/group/${id}/user/out',
        all: this.apiUrl + '/group/user/all',
        addTournament: this.apiUrl + '/group/${id}/tournament/add',
        removeTournament: this.apiUrl + '/group/${id}/tournament/remove/${idTournament}',
        winnerTournament: this.apiUrl + '/group/${id}/tournament/${idTournament}/winner'
    };

    public challenge = {
        profile: this.apiUrl + '/challenge/profile',
        accept: this.apiUrl + '/challenge/${id}/accept',
        reject: this.apiUrl + '/challenge/${id}/reject',
        finalize: this.apiUrl + '/challenge/${id}/finalize'
    };

}
