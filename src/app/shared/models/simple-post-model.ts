import { SimpleUserModel } from "./simple-user-model";

export class SimplePostModel {
    public id: number;
    public title: string;
    public message: string;
    public date: Date;
    public user : SimpleUserModel;
    public likes: Array<SimpleUserModel>; 
}
