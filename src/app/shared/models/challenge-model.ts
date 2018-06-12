import { SimpleUserChallengeModel } from "./simple-user-challenge-model";

export class ChallengeModel {
    public challenge: SimpleUserChallengeModel;
    public challengesForDay: Array<SimpleUserChallengeModel>;
    public challengesRemaining: number;
}
