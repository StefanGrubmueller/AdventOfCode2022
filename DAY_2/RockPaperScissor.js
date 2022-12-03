var SCISSORS = ['C', 'Z'];
var ROCKS = ['A', 'X'];
var PAPERS = ['B', 'Y'];
var SCISSOR_VALUE = 3;
var PAPER_VALUE = 2;
var ROCK_VALUE = 1;
var WIN_VALUE = 6;
var DRAW_VALUE = 3;
var LOSE = 'X';
var DRAW = 'Y';
var WIN = 'Z';
module.exports = /** @class */ (function () {
    function RockPaperScissor() {
        this.totalScore = 0;
    }
    // Public
    RockPaperScissor.prototype.setHands = function (row) {
        this.opponentsHand = row.charAt(0);
        this.myHand = row.charAt(2);
        this.calculateTotalScore();
    };
    RockPaperScissor.prototype.setCommands = function (row) {
        this.opponentsHand = row.charAt(0);
        this.roundOutcome = row.charAt(2);
        this.calculateTotalScoreWhenOutcomeIsGiven();
    };
    RockPaperScissor.prototype.getTotalScore = function () {
        return this.totalScore;
    };
    // Private
    RockPaperScissor.prototype.calculateTotalScore = function () {
        if (this.isRock(this.myHand)) {
            this.totalScore += ROCK_VALUE;
            if (this.isRock(this.opponentsHand)) {
                this.totalScore += DRAW_VALUE;
            }
            else if (this.isScissor(this.opponentsHand)) {
                this.totalScore += WIN_VALUE;
            }
        }
        else if (this.isPaper(this.myHand)) {
            this.totalScore += PAPER_VALUE;
            if (this.isPaper(this.opponentsHand)) {
                this.totalScore += DRAW_VALUE;
            }
            else if (this.isRock(this.opponentsHand)) {
                this.totalScore += WIN_VALUE;
            }
        }
        else if (this.isScissor(this.myHand)) {
            this.totalScore += SCISSOR_VALUE;
            if (this.isScissor(this.opponentsHand)) {
                this.totalScore += DRAW_VALUE;
            }
            else if (this.isPaper(this.opponentsHand)) {
                this.totalScore += WIN_VALUE;
            }
        }
    };
    RockPaperScissor.prototype.isRock = function (value) {
        return ROCKS.includes(value);
    };
    RockPaperScissor.prototype.isPaper = function (value) {
        return PAPERS.includes(value);
    };
    RockPaperScissor.prototype.isScissor = function (value) {
        return SCISSORS.includes(value);
    };
    RockPaperScissor.prototype.calculateTotalScoreWhenOutcomeIsGiven = function () {
        if (this.isRock(this.opponentsHand)) {
            if (this.roundOutcome === DRAW) {
                this.totalScore += DRAW_VALUE + ROCK_VALUE;
            }
            else if (this.roundOutcome === WIN) {
                this.totalScore += WIN_VALUE + PAPER_VALUE;
            }
            else if (this.roundOutcome === LOSE) {
                this.totalScore += SCISSOR_VALUE;
            }
        }
        else if (this.isPaper(this.opponentsHand)) {
            if (this.roundOutcome === DRAW) {
                this.totalScore += DRAW_VALUE + PAPER_VALUE;
            }
            else if (this.roundOutcome === WIN) {
                this.totalScore += WIN_VALUE + SCISSOR_VALUE;
            }
            else if (this.roundOutcome === LOSE) {
                this.totalScore += ROCK_VALUE;
            }
        }
        else if (this.isScissor(this.opponentsHand)) {
            if (this.roundOutcome === DRAW) {
                this.totalScore += DRAW_VALUE + SCISSOR_VALUE;
            }
            else if (this.roundOutcome === WIN) {
                this.totalScore += WIN_VALUE + ROCK_VALUE;
            }
            else if (this.roundOutcome === LOSE) {
                this.totalScore += PAPER_VALUE;
            }
        }
    };
    return RockPaperScissor;
}());
