import { SimpleUserModel } from "./simple-user-model";
import { SimpleTournamentModel } from "./simple-tournament-model";

export class GroupProfileModel {
    public id: number;
    public name: string;
    public image: string;
    public description: string;
    public administrator: SimpleUserModel;
    public users: Array<SimpleUserModel>;
    public tournamentsNotFinished: Array<SimpleTournamentModel>;
    public tournamentsFinished: Array<SimpleTournamentModel>
}
