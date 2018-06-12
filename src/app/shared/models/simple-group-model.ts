import { SimpleUserModel } from "./simple-user-model";

export class SimpleGroupModel {
    public id: number;
    public name: string;
    public image: string;
    public description: string;
    public adminstrator: SimpleUserModel;
}
