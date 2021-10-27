export default class Player {
    constructor(symbol, label) {
        this.symbol = symbol;
        this.points = 0;
        this.winStreak = 0;
        this.label = label;
    }
    addPoints(){
        this.winStreak++;
        if (this.winStreak == 3){
            this.points = this.points + 2;
            this.label.textContent = this.points + " Double!!";
        }
        else {
            this.points++; 
            this.label.textContent = this.points;
        }
    }
}
