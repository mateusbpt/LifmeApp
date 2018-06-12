import { Challenge } from "./challenge";

export class SimpleUserChallengeModel {
    public id: number;
    public dayChallenge: Date;
    public accept: boolean;
    public completed: boolean;
    public finished: boolean;
    public feedback: string;
    public challenge: Challenge;
}
