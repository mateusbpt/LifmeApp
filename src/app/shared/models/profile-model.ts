import { SimpleGroupModel } from "./simple-group-model";
import { SimpleUserModel } from "./simple-user-model";

export class ProfileModel {
    public id: number;
    public name: string;
    public lastName: string; 
    public nickname: string; 
    public avatar: string; 
    public pendings: Array<SimpleUserModel>; 
    public friends: Array<SimpleUserModel>; 
    public groups: Array<SimpleGroupModel>; 
    public isUser: boolean; 
    public isPending: boolean;
    public isFriend: boolean; 
    public isInvite: boolean; 
}
