import { SimpleUserChallengeModel } from "./simple-user-challenge-model";
import { Badge } from "./badge";

export class FeedbackModel {
    public totalChallenges: number;
    public totalBadges: number;
    public badges: Array<Badge>;
    public completedChallenges: Array<SimpleUserChallengeModel>;
}
