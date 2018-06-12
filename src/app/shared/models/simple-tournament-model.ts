import { SimpleUserModel } from "./simple-user-model";

export class SimpleTournamentModel {
    public id: number;
    public name: string;
    public image: string; 
    public finished: boolean; 
    public winner: SimpleUserModel;
    public startDate: Date;
    public feedback: string;
}
