const SCISSORS = ['C', 'Z'];
type SCISSOR = typeof SCISSORS[number];
const ROCKS= ['A', 'X'];
type ROCK = typeof ROCKS[number];
const PAPERS = ['B', 'Y'];
type PAPER = typeof PAPERS[number];

const SCISSOR_VALUE = 3;
const PAPER_VALUE = 2;
const ROCK_VALUE = 1;
const WIN_VALUE = 6;
const DRAW_VALUE = 3;

const LOSE = 'X';
const DRAW = 'Y';
const WIN = 'Z';

module.exports = class RockPaperScissor {
    myHand: string;
    opponentsHand: string;
    roundOutcome: string;
    totalScore: number = 0;

    // Public
    public setHands(row: string) {
        this.opponentsHand = row.charAt(0);
        this.myHand = row.charAt(2);
        this.calculateTotalScore();
    }

    public setCommands(row: string) {
        this.opponentsHand = row.charAt(0);
        this.roundOutcome = row.charAt(2);
        this.calculateTotalScoreWhenOutcomeIsGiven();
    }

    public getTotalScore(): number {
        return this.totalScore;
    }

    // Private
    private calculateTotalScore() {
        if (this.isRock(this.myHand)) {
            this.totalScore += ROCK_VALUE;
            if (this.isRock(this.opponentsHand)) {
                this.totalScore += DRAW_VALUE;
            } else if (this.isScissor(this.opponentsHand)) {
                this.totalScore += WIN_VALUE;
            } 
        } else if (this.isPaper(this.myHand)) {
            this.totalScore += PAPER_VALUE;
            if (this.isPaper(this.opponentsHand)) {
                this.totalScore += DRAW_VALUE;
            } else if (this.isRock(this.opponentsHand)) {
                this.totalScore += WIN_VALUE;
            } 
        } else if (this.isScissor(this.myHand)) {
            this.totalScore += SCISSOR_VALUE;
            if (this.isScissor(this.opponentsHand)) {
                this.totalScore += DRAW_VALUE;
            } else if (this.isPaper(this.opponentsHand)) {
                this.totalScore += WIN_VALUE;
            } 
        }
    }
 
    private isRock(value: string): boolean {
        return ROCKS.includes(value as ROCK);
    }
    
    private isPaper(value: string): boolean {
        return PAPERS.includes(value as PAPER);
    }
    
    private isScissor(value: string): boolean {
        return SCISSORS.includes(value as SCISSOR);
    }

    private calculateTotalScoreWhenOutcomeIsGiven() {
        if (this.isRock(this.opponentsHand)) {
            if (this.roundOutcome === DRAW) {
                this.totalScore += DRAW_VALUE + ROCK_VALUE;
            } else if (this.roundOutcome === WIN) {
                this.totalScore += WIN_VALUE + PAPER_VALUE;
            } else if (this.roundOutcome === LOSE) {
                this.totalScore += SCISSOR_VALUE;
            }
        } else if (this.isPaper(this.opponentsHand)) {
            if (this.roundOutcome === DRAW) {
                this.totalScore += DRAW_VALUE + PAPER_VALUE;
            } else if (this.roundOutcome === WIN) {
                this.totalScore += WIN_VALUE + SCISSOR_VALUE;
            } else if (this.roundOutcome === LOSE) {
                this.totalScore += ROCK_VALUE;
            }
        } else if (this.isScissor(this.opponentsHand)) {
            if (this.roundOutcome === DRAW) {
                this.totalScore += DRAW_VALUE + SCISSOR_VALUE;
            } else if (this.roundOutcome === WIN) {
                this.totalScore += WIN_VALUE + ROCK_VALUE;
            } else if (this.roundOutcome === LOSE) {
                this.totalScore += PAPER_VALUE;
            }
        }
    }
}